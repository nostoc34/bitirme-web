import React, {
	useEffect,
	useState
} from "react";
import Navbar from "../../../components/navbar";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import ProfileHeader from "../../../components/profileHeader";
import { client } from "../../../../service";
import getOwnProfileData from "../../../../service/query/getOwnProfile";
import getOwnPosts from "../../../../service/query/getOwnPosts";
import profilePost from "../../../components/profilePost";
import { useGlobalState } from "../../../context";
import ProfilePost from "../../../components/profilePost";

const MyProfile = ({ classes, userName }) => {
	const [profileData, setProfileData] = useState([]);
	const [postData, setPostData] = useState([]);


	const getPostData = () => {
		client
			.query({
				query: getOwnPosts,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache"
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
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache"
			})
			.then((res) => {
				setProfileData(res.data.getOwnProfileData.data);
			})
			.catch((err) => {
				console.error("getOwnProfileData error:", JSON.stringify(err));
			});
	};

	useEffect(() => {
		getProfileData();
		getPostData();
	}, []);

	return (
		<div>
			<Navbar />
			<div className={classes.container}>
				<ProfileHeader isMyProfile={true} isFriendsWith={false} data={profileData} />
				<div className={classes.postSection}>
				
					{
						postData.map((item, index) => {
							return(
								<ProfilePost key={index} image={item.image} likes={item.likes} comments={item.comments.length} content={item.content} />
							)
						})
					}
				</div>
			</div>
		</div>
	);
};

export default injectSheet(styles)(MyProfile);
