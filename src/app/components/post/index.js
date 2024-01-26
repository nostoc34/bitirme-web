import React from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import { Icon } from "@iconify/react";

const Post = ({ classes, description, image, comments, likeCount, commentCount, isHeader, handleLike, handleNewComment, commentOnChange, comment, ppImg, userName, navigateProfile }) => {
	return (
		<div className={classes.container}>
            {
                isHeader &&
                <div className={classes.header} onClick={navigateProfile}>
                    <div className={classes.picContainer}>
                        <img src={ppImg} alt="pp" />
                    </div>
                    <div>
                        {userName}
                    </div>
                </div>
            }
			
			<div className={classes.post} style={{borderRadius: isHeader ? "0 0 25px 25px" : "25px"}}>
                <div className={classes.image}>
                    <img src={image} alt="post" style={{borderRadius: isHeader ? "0 0 0 25px" : "25px 0 0 25px"}}/>
                </div>
                <div className={classes.info}>
                    <div className={classes.description}>
                        {description}
                    </div>
                    <div className={classes.likeComment}>
                        <div className={classes.lcItem}>
                            {likeCount} <Icon icon="icon-park-outline:like" />
                        </div>
                        <div className={classes.lcItem}>
                            <Icon icon="iconamoon:comment-dots-light" /> {commentCount}
                        </div>
                        
                    </div>
                    <div className={classes.newComment}>
                        <input onKeyDown={(e) => {
							if(e.key === "Enter") {
								handleNewComment();
							}
                    	}} value={comment} onChange={commentOnChange} placeholder="Yorum yap..."/>
                        <div onClick={handleNewComment}><Icon icon="iconamoon:comment-dots-fill" /></div>
                    </div>
                    <div className={classes.bottomSection}>
                        <div className={classes.commentsSection}>
                            {
                                comments && comments !== undefined ?
                                comments.length === 0 ?
                                <div className={classes.comment}>
                                    İlk yorumu sen yap!
                                </div> :
                                comments.map((item, index) => {
                                    return (
                                        <div className={classes.comment} key={index}>
                                            <div className={classes.userInfo}>
                                                <div className={classes.profilePic}>
                                                    <img src={item.profilePhoto} alt="pp" />
                                                </div>
                                                <div>
                                                    <span> {item.userName} </span>
                                                </div>
                                                <div className={classes.commentContent}>
                                                    {item.comment}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }) : null                            
                            }
                        </div>
                        <div className={classes.likeBtn} onClick={handleLike}>
                            <Icon icon="icon-park-solid:like" />
                        </div>
                    </div>
                </div>
			</div>
		</div>
	);
};

export default injectSheet(styles)(Post);
