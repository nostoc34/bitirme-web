import React, {
	useEffect,
	useState
} from "react";
import Navbar from "../../../components/navbar";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import ProfileHeader from "../../../components/profileHeader";
import ProfilePost from "../../../components/profilePost";
import Modal from "../../../components/modal";
import Post from "../../../components/post";
import NoPost from "../../../components/noPost";
import { client } from "../../../../service";
import getProfile from "../../../../service/query/getProfile";
import getProfilePosts from "../../../../service/query/getProfilePosts";
import getPost from "../../../../service/query/getPost";
import newComment from "../../../../service/mutation/newComment";
import newLike from "../../../../service/mutation/newLike";
import handleFollow from "../../../../service/mutation/handleFollow";
import { useParams } from "react-router-dom";

const Profile = ({ classes }) => {
	const [profileData, setProfileData] = useState([]);
	const [postData, setPostData] = useState([]);
	const [specificPost, setSpecificPost] = useState({});
	const [postModalOpen, setPostModalOpen] = useState(false);
	const [comment, setComment] = useState("");
	const [commentPostID, setCommentPostID] = useState("");
    const {userName} = useParams();
    const [isFriendsWith, setIsFriendWith] = useState("");
    const [postMode, setPostMode] = useState("");

	const getPostData = () => {
		client
			.query({
				query: getProfilePosts,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache",
                variables: {
                    userName: userName
                }
			})
			.then((res) => {
				setPostData(res.data.getProfilePosts.data);
			})
			.catch((err) => {
				console.error("getProfilePosts error:", err);
			});
	};
	const getProfileData = () => {
		client
			.query({
				query: getProfile,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache",
                variables: {
                    userName: userName
                }
			})
			.then((res) => {
                const response = res.data.getProfile.data;
                setProfileData(response);
				if(res.data.getProfile.code === 205) {
					if(response.followStatus === "waiting") {
						setIsFriendWith("waiting");
					}
					setPostMode("private");
				}
				if(res.data.getProfile.code === 206) {
					setIsFriendWith(response.followStatus)
				} else {
					setIsFriendWith(response.followStatus)
				}
			})
			.catch((err) => {
				console.error("getProfile error:", JSON.stringify(err));
			});
	};

	const getSpecificPost = (pID) => {
		client
			.query({
				query: getPost,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache",
				variables: {
					postID: pID
				}
			})
			.then((res) => {
				setSpecificPost(res.data.getPost.data);
			})
			.catch((err) => {
				console.error("getPost error:", JSON.stringify(err));
			});
	};

	const handleNewComment = () => {
		client
			.mutate({
				mutation: newComment,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache",
				variables: {
					comment: comment,
					postID: commentPostID
				}
			})
			.then((res) => {
				const response = res.data.newComment
				if(response.code === 200) {
					getSpecificPost(commentPostID);
					getPostData();
					setComment("");
				}
			})
			.catch((err) => {
				console.error("newComment error:", JSON.stringify(err));
			})
	};

	const handleLike = () => {
		client
			.mutate({
				mutation: newLike,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache",
				variables: {
					postID: commentPostID
				}
			})
			.then((res) => {
				const response = res.data.newLike;
				if(response.code === 200) {
					getSpecificPost(commentPostID);
					getPostData();
				}
			})
			.catch((err) => {
				console.error("newLike error:", JSON.stringify(err));
			})
	};

    const handleFollowRequest = () => {
        client
			.mutate({
				mutation: handleFollow,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache",
				variables: {
					toUser: profileData?.id
				}
			})
			.then((res) => {
				const response = res.data.handleFollow;
				if(response.code === 200) {
					getProfileData();
                    setIsFriendWith(!isFriendsWith);
				}
			})
			.catch((err) => {
				console.error("handleFollow error:", JSON.stringify(err));
			})
    };

	const commentOnChange = (e) => {
		setComment(e.target.value);
	};

	const renderPosts = () => {
		if(postMode === "private") {
			console.log("1");
			return <NoPost mode={"private"}/>;
		} else {
			if(postData && postData.length) {
				console.log("2");
				return postData.map((item, index) => {
					console.log("hop");
					return(
						<ProfilePost
							key={index}
							image={item.image}
							likes={item.likes}
							comments={item.comments.length}
							content={item.content}
							handleClick={() => {
								setPostModalOpen(true);
								getSpecificPost(item.id);
								setCommentPostID(item.id);
							}}
						/>
					)
				})
			} else {
				console.log("3");
				return <NoPost />;
			}
		}
	}


	useEffect(() => {
		getProfileData();
		getPostData();
	}, []);

	return (
		<div>
			<Navbar />
			<div className={classes.container}>
				<ProfileHeader
                    isMyProfile={false}
                    isFriendsWith={isFriendsWith}
                    data={profileData}
                    handleFollow={handleFollowRequest}
                    />
				<div className={classes.postSection}>
					{	
						renderPosts()
					}
				</div>
			</div>
			{
				postModalOpen &&
				<Modal
					index={1}
					children={
						<Post
							description={specificPost?.content}
							image={specificPost?.image}
							likeCount={specificPost?.likeCount}
							commentCount={specificPost?.commentCount}
							comments={specificPost?.comments}
							isHeader={false}
							handleNewComment={handleNewComment}
							commentOnChange={commentOnChange}
							comment={comment}
							handleLike={handleLike}
						/>
					}
					onClose={() => {
						setPostModalOpen(false);
					}}
				/>
			}
			
		</div>
	);
};

export default injectSheet(styles)(Profile);
