import React, { useEffect, useState } from "react";
import Navbar from "../../../components/navbar";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import ProfileHeader from "../../../components/profileHeader";
import ProfilePost from "../../../components/profilePost";
import Modal from "../../../components/modal";
import Post from "../../../components/post";
import NoPost from "../../../components/noPost";
import { client } from "../../../../service";
import getOwnProfileData from "../../../../service/query/getOwnProfile";
import getOwnPosts from "../../../../service/query/getOwnPosts";
import getPost from "../../../../service/query/getPost";
import editProfile from "../../../../service/mutation/editProfile";
import newComment from "../../../../service/mutation/newComment";
import newLike from "../../../../service/mutation/newLike";
import { Icon } from "@iconify/react";
import Switch from "react-switch";

const MyProfile = ({ classes }) => {
	const [profileData, setProfileData] = useState([]);
	const [postData, setPostData] = useState([]);
	const [specificPost, setSpecificPost] = useState({});
	const [postModalOpen, setPostModalOpen] = useState(false);
	const [editModalOpen, setEditModalOpen] = useState(false);
	const [newUserData, setNewUserData] = useState({
		isPrivate: profileData?.isPrivate,
	});
	const [comment, setComment] = useState("");
	const [commentPostID, setCommentPostID] = useState("");

	const getPostData = () => {
		client
			.query({
				query: getOwnPosts,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user")
							? JSON.parse(window.localStorage.getItem("user"))
									.token
							: null,
					},
				},
				fetchPolicy: "no-cache",
			})
			.then((res) => {
				setPostData(res.data.getOwnPosts.data);
			})
			.catch((err) => {
				console.error("getOwnPosts error:", err);
			});
	};

	const getProfileData = () => {
		client
			.query({
				query: getOwnProfileData,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user")
							? JSON.parse(window.localStorage.getItem("user"))
									.token
							: null,
					},
				},
				fetchPolicy: "no-cache",
			})
			.then((res) => {
				setProfileData(res.data.getOwnProfileData.data);
				setNewUserData({
					...newUserData,
					isPrivate: res.data.getOwnProfileData.data.isPrivate,
				});
			})
			.catch((err) => {
				console.error("getOwnProfileData error:", JSON.stringify(err));
			});
	};

	const getSpecificPost = (pID) => {
		client
			.query({
				query: getPost,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user")
							? JSON.parse(window.localStorage.getItem("user"))
									.token
							: null,
					},
				},
				fetchPolicy: "no-cache",
				variables: {
					postID: pID,
				},
			})
			.then((res) => {
				setSpecificPost(res.data.getPost.data);
			})
			.catch((err) => {
				console.error("getPost error:", JSON.stringify(err));
			});
	};

	const updateProfile = () => {
		console.log(newUserData);
		client
			.mutate({
				mutation: editProfile,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user")
							? JSON.parse(window.localStorage.getItem("user"))
									.token
							: null,
					},
				},
				fetchPolicy: "no-cache",
				variables: newUserData,
			})
			.then((res) => {
				const response = res.data.editProfile;
				if (response.code === 200) {
					getProfileData();
					console.log("başarılı");
				}
			})
			.catch((err) => {
				console.error("editProfile error:", JSON.stringify(err));
			});
	};

	const handleNewComment = () => {
		client
			.mutate({
				mutation: newComment,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user")
							? JSON.parse(window.localStorage.getItem("user"))
									.token
							: null,
					},
				},
				fetchPolicy: "no-cache",
				variables: {
					comment: comment,
					postID: commentPostID,
				},
			})
			.then((res) => {
				const response = res.data.newComment;
				if (response.code === 200) {
					getSpecificPost(commentPostID);
					getPostData();
					setComment("");
				}
			})
			.catch((err) => {
				console.error("newComment error:", JSON.stringify(err));
			});
	};

	const handleLike = () => {
		client
			.mutate({
				mutation: newLike,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user")
							? JSON.parse(window.localStorage.getItem("user"))
									.token
							: null,
					},
				},
				fetchPolicy: "no-cache",
				variables: {
					postID: commentPostID,
				},
			})
			.then((res) => {
				const response = res.data.newLike;
				if (response.code === 200) {
					getSpecificPost(commentPostID);
					getPostData();
				}
			})
			.catch((err) => {
				console.error("newLike error:", JSON.stringify(err));
			});
	};

	const handlePrivate = () => {
		setNewUserData({
			...newUserData,
			isPrivate: !newUserData.isPrivate,
		});
	};

	const commentOnChange = (e) => {
		setComment(e.target.value);
	};

	useEffect(() => {
		getProfileData();
		getPostData();
	}, []);

	return (
		<div>
			<Navbar />
			<div className={classes.container}>
				<ProfileHeader
					isMyProfile={true}
					isFriendsWith={false}
					data={profileData}
					handleEdit={() => setEditModalOpen(true)}
				/>
				<div className={classes.postSection}>
					{postData.length === 0 ? (
						<NoPost />
					) : (
						postData.map((item, index) => {
							return (
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
							);
						})
					)}
				</div>
			</div>
			{postModalOpen && (
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
							isMyPost={true}
							postID={specificPost?.id}
						/>
					}
					onClose={() => {
						setPostModalOpen(false);
					}}
				/>
			)}
			{editModalOpen && (
				<Modal
					index={1}
					children={
						<div
							className={classes.editContainer}
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							<div className={classes.editLeftSection}>
								<div className={classes.editPics}>
									<div className={classes.picContainer}>
										<img
											src={profileData?.profilePhoto}
											alt="pp"
										/>
									</div>
									<div>
										<Icon icon="ion:camera" />
									</div>
								</div>
								<div className={classes.editButtons}>
									<div>
										<button>
											E-post Adresini Değiştir
										</button>
									</div>
									<div>
										<button>Şifreni Değiştir</button>
									</div>
								</div>
							</div>
							<div className={classes.editRightSection}>
								<div className={classes.switch}>
									Gizli Hesap
									<Switch
										checked={newUserData.isPrivate}
										onChange={handlePrivate}
										onColor="#FFBC7E"
										onHandleColor="#FF7A00"
										handleDiameter={30}
										uncheckedIcon={false}
										checkedIcon={false}
										boxShadow="0px 1px 5px rgba(255, 122, 0, 1)"
										activeBoxShadow="0px 0px 1px 10px rgba(255, 122, 0, 1)"
										height={20}
										width={48}
										className="react-switch"
										id="material-switch"
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder={profileData?.userName}
										onChange={(e) => {
											setNewUserData({
												...newUserData,
												userName: e.target.value,
											});
										}}
									/>
								</div>
								<div>
									<input
										type="text"
										placeholder={profileData?.fullName}
										onChange={(e) => {
											setNewUserData({
												...newUserData,
												fullName: e.target.value,
											});
										}}
									/>
								</div>
								<div>
									<textarea
										type="text"
										placeholder={profileData?.about}
										onChange={(e) => {
											setNewUserData({
												...newUserData,
												about: e.target.value,
											});
										}}
									/>
								</div>
								<div>
									<button onClick={updateProfile}>
										Kaydet
									</button>
								</div>
							</div>
						</div>
					}
					onClose={() => {
						setEditModalOpen(false);
					}}
				/>
			)}
		</div>
	);
};

export default injectSheet(styles)(MyProfile);
