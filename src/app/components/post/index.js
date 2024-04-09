import React, { useEffect, useState } from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import { Icon } from "@iconify/react";
import { client } from "../../../service";
import deleteComment from "../../../service/mutation/deleteComment";
import deletePost from "../../../service/mutation/deletePost";

const Post = ({
	classes,
	description,
	image,
	comments,
	likeCount,
	commentCount,
	isHeader,
	handleLike,
	handleNewComment,
	commentOnChange,
	comment,
	ppImg,
	userName,
	navigateProfile,
	commentUserID,
	isMyPost = false,
    postID
}) => {
	const [sure, setSure] = useState({
		commentID: "",
		status: false,
	});
	const [deleteVisible, setDeleteVisible] = useState({
		commentID: "",
		status: false,
	});

	const deleteComm = (cID) => {
		client
			.mutate({
				mutation: deleteComment,
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
					commentID: cID,
				},
			})
			.then((res) => {
				const response = res.data.deleteComment;
				console.log(response);
			})
			.catch((err) => {
				console.error("deleteComment error:", JSON.stringify(err));
			});
	};

    const delPost = (cID) => {
		client
			.mutate({
				mutation: deletePost,
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
					postID: cID,
				},
			})
			.then((res) => {
				const response = res.data.deletePost;
				window.location.href = '/my-profile';
			})
			.catch((err) => {
				console.error("deletePost error:", JSON.stringify(err));
			});
	};

	return (
		<div
			className={classes.container}
			onClick={(e) => {
				e.stopPropagation();
			}}
		>
			{isHeader && (
				<div className={classes.header} onClick={navigateProfile}>
					<div className={classes.picContainer}>
						<img src={ppImg} alt="pp" />
					</div>
					<div>{userName}</div>
				</div>
			)}

			<div
				className={classes.post}
				style={{ borderRadius: isHeader ? "0 0 25px 25px" : "25px" }}
			>
				<div className={classes.image}>
					<img
						src={image}
						alt="post"
						style={{
							borderRadius: isHeader
								? "0 0 0 25px"
								: "25px 0 0 25px",
						}}
					/>
				</div>
				<div className={classes.info}>
					<div className={classes.description}>{description}</div>
					<div className={classes.likeComment}>
						<div className={classes.lcItem}>
							{likeCount} <Icon icon="icon-park-outline:like" />
						</div>
						<div className={classes.lcItem}>
							<Icon icon="iconamoon:comment-dots-light" />{" "}
							{commentCount}
						</div>
					</div>
					<div className={classes.newComment}>
						<input
							onKeyDown={(e) => {
								if (e.key === "Enter") {
									handleNewComment();
								}
							}}
							value={comment}
							onChange={commentOnChange}
							placeholder="Yorum yap..."
						/>
						<div onClick={handleNewComment}>
							<Icon icon="iconamoon:comment-dots-fill" />
						</div>
					</div>
					<div className={classes.bottomSection}>
						<div className={classes.commentsSection}>
							{comments && comments !== undefined ? (
								comments.length === 0 ? (
									<div className={classes.comment}>
										İlk yorumu sen yap!
									</div>
								) : (
									comments.map((item, index) => {
										return (
											<div
												className={classes.comment}
												key={index}
												onMouseEnter={() => {
													setDeleteVisible({
														commentID: item.id,
														status: true,
													});
												}}
												onMouseLeave={() => {
													setDeleteVisible({
														commentID: "",
														status: false,
													});
													setSure({
														commentID: "",
														status: false
													})
												}}
											>
												<div
													className={classes.userInfo}
												>
													<div
														className={
															classes.profilePic
														}
													>
														<img
															src={
																item.profilePhoto
															}
															alt="pp"
														/>
													</div>
													<div>
														<span>
															{" "}
															{item.userName}{" "}
														</span>
													</div>
													<div
														className={
															classes.commentContent
														}
													>
														{item.comment}
													</div>
												</div>
												{item.userID ===
												commentUserID ? (
													<div
														className={
															classes.deleteIcon
														}
														style={{
															display: "flex",
															justifyContent:
																"center",
															alignItems:
																"center",
															width: "20px",
															visibility:
																deleteVisible.commentID ===
																	item.id &&
																deleteVisible.status ===
																	true
																	? "visible"
																	: "hidden",
															zIndex: 23,
														}}
														onClick={() => {
															setSure({
																commentID:
																	item.id,
																status: !sure.status,
															});
														}}
													>
														<Icon
															style={{
																zIndex: -1,
															}}
															icon="material-symbols:delete"
														/>
														<div
															className={
																classes.sure
															}
															style={{
																display:
																	sure.commentID ===
																		item.id &&
																	sure.status ===
																		true
																		? "block"
																		: "none",
															}}
														>
															Emin misin?
															<div
																className={
																	classes.sureAnswers
																}
															>
																<div
                                                                    className={classes.yes}
																	onClick={() => {
																		deleteComm(
																			item.id
																		);
																	}}
																>
																	Evet
																</div>
																<div
                                                                    className={classes.no}
																	onClick={() => {
																		setSure(
																			{
																				commentID:
																					"",
																				status: false,
																			}
																		);
																	}}
																>
																	Hayır
																</div>
															</div>
														</div>
													</div>
												) : null}
											</div>
										);
									})
								)
							) : null}
						</div>
						<div className={classes.likeBtn} onClick={handleLike}>
							<Icon icon="icon-park-solid:like" />
						</div>
						{isMyPost ? (
							<div className={classes.delIcon}>
								<Icon
									style={{ zIndex: -1 }}
									icon="material-symbols:delete"
                                    onClick={() => {
                                        setSure({
                                            commentID:
                                                postID,
                                            status: !sure.status,
                                        });
                                    }}
								/>
								<div
									className={classes.sure}
									style={{
										display:
											sure.commentID === postID &&
											sure.status === true
												? "block"
												: "none",
									}}
								>
									Emin misin?
									<div className={classes.sureAnswers}>
										<div
                                            className={classes.yes}
											onClick={() => {
												delPost(postID);
											}}
										>
											Evet
										</div>
										<div
                                            className={classes.yes}
											onClick={() => {
												setSure({
													commentID: "",
													status: false,
												});
											}}
										>
											Hayır
										</div>
									</div>
								</div>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default injectSheet(styles)(Post);
