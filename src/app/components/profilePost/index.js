import React from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import { Icon } from "@iconify/react";

const ProfilePost = ({ classes, image, likes, comments, content }) => {
	return (
		<div className={classes.post}>
			<img src={image} alt="post" />
			<div className={classes.info}>
				<div> {content} </div>
				<div className={classes.infoItem}>
					<Icon icon="icon-park-solid:like" />
					<div> {likes} </div>
				</div>
				<div className={classes.infoItem}>
					<Icon icon="iconamoon:comment-dots-light" />
					<div> {comments} </div>
				</div>
			</div>
		</div>
	);
};

export default injectSheet(styles)(ProfilePost);
  