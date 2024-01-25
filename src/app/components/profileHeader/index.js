import React  from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import Follow from "../../../assets/follow";
import Unfollow from "../../../assets/unfollow";
import Message from "../../../assets/message";
import Edit from "../../../assets/edit";

const ProfileHeader = ({ classes, isMyProfile, isFriendsWith, data, handleEdit, handleFollow }) => {

	return (
		<div
			className={classes.header}
		>
			<div className={classes.profilePic}>
				<img src={data.profilePhoto} alt="pp" />
			</div>
			<div className={classes.info}>
				<div className={classes.infoItem}> {data.fullName} </div>
				<div className={classes.infoItem}> {data.userName} </div>
				<div className={classes.infoItem}>
					<span>{data.about}</span>
				</div>
			</div>
			<div className={classes.follow}>
				<div>
					<div>Takip</div>
					<div> {data.follows} </div>
				</div>
				<div>
					<div>Takipçi</div>
					<div> {data.followers} </div>
				</div>
			</div>
			{isMyProfile ? (
				<div className={classes.editProfile} onClick={handleEdit}>
					<Edit />
				</div>
			) : (
				<div className={classes.relations}>
					<div onClick={handleFollow}>{isFriendsWith === "" ? <Follow /> : <Unfollow />}</div>
					<div>
						<Message />
					</div>
				</div>
			)}
		</div>
	);
};

export default injectSheet(styles)(ProfileHeader);
