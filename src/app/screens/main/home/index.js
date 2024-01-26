import React, { useState, useEffect } from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import Navbar from "../../../components/navbar";
import Post from "../../../components/post";
import { Icon } from '@iconify/react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Modal from "../../../components/modal";

import { client } from "../../../../service";
import getPosts from "../../../../service/query/getPosts";
import newComment from "../../../../service/mutation/newComment";
import newLike from "../../../../service/mutation/newLike";
import newPost from "../../../../service/mutation/newPost";

const Home = ({classes}) => {
    const [postData, setPostData ] = useState([]);
    const [comment, setComment] = useState("");
    const [modalOpen, setModalOpen] = useState(false);
    const [postImage, setPostImage] = useState();
    const [tempPostImg, setTempPostImg] = useState();
    const [postDesc, setPostDesc] = useState("");

    const getPostData = () => {
		client
			.query({
				query: getPosts,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache"
			})
			.then((res) => {
				setPostData(res.data.getPosts.data);
			})
			.catch((err) => {
				console.error("getPosts error:", err);
			});
	};

    const handleNewComment = (pID) => {
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
					postID: pID
				}
			})
			.then((res) => {
				const response = res.data.newComment
				if(response.code === 200) {
					getPostData();
					setComment("");
				}
			})
			.catch((err) => {
				console.error("newComment error:", JSON.stringify(err));
			})
	};

	const handleLike = (pID) => {
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
					postID: pID
				}
			})
			.then((res) => {
				const response = res.data.newLike;
				if(response.code === 200) {
					getPostData();
				}
			})
			.catch((err) => {
				console.error("newLike error:", JSON.stringify(err));
			})
	}

    const shareNewPost = () => {
        console.log(dataURLtoFile(postImage, tempPostImg.name));
        let variables = {
            description: postData
        };
        variables.image = dataURLtoFile(postImage, tempPostImg.name)
        client
			.mutate({
				mutation: newPost,
				context: {
					headers: {
						authorization: window.localStorage.getItem("user") ? JSON.parse(window.localStorage.getItem("user")).token : null,
					},
				},
				fetchPolicy: "no-cache",
				variables: variables
			})
			.then((res) => {
				const response = res.data.newPost;
				if(response.code === 200) {
					console.log("başarılı");
				}
			})
			.catch((err) => {
				console.error("newPost error:", JSON.stringify(err));
			})
    };
    
    const commentOnChange = (e) => {
		setComment(e.target.value);
	}

    const dataURLtoFile = (dataurl, filename) => {
        var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], filename, { type:mime })
    };


    useEffect(() => {
		getPostData();
	}, []);

    return(
        <div>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.postSection}>
                    {
                        postData.length === 0 ?
                        <div className={classes.emptyHome}>Buralar ıssız gibi. Arkadaşlarını takip etmeyi dene!</div> : 
                        postData.map((item, index) => {
                            return (
                                <Post
                                    key={index}
                                    description={item.content}
                                    image={item.image}
                                    likeCount={item.likeCount}
                                    commentCount={item.commentCount}
                                    comments={item.comments}ss
                                    isHeader={true}
                                    userName={item.userName}
                                    ppImg={item.profilePhoto}
                                    handleNewComment={() => {
                                        handleNewComment(item.id);
                                    }}
                                    commentOnChange={commentOnChange}
                                    comment={comment}
                                    handleLike={() => {
                                        handleLike(item.id);
                                    }}
                                    navigateProfile={() => {
                                        window.location.href = `/profile/${item.userName}`;
                                    }}
                                />
                            );
                        })
                    }
                </div>
                <div className={classes.sideSection}>
                    <div className={classes.newPost}
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        Yeni Gönderi
                        <Icon icon="icon-park-outline:new-picture" />
                    </div>
                    <div className={classes.suggestion}>
                        <div className={classes.sgsHeader}>
                            Tanıyor Olabileceğin Kişiler
                        </div>
                        <Carousel
                            className={classes.slider}
                            showThumbs={false}
                            showStatus={false}
                            swipeable
                            emulateTouch
                        >
                            <div className={classes.sliderItem}>
                                <img
                                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                    alt="asda"
                                />
                                <div>
                                    <h2>name surname</h2>
                                </div>
                                <div>
                                    <h3>username</h3>
                                </div>
                                <div>
                                    <span>12 Ortak Bağlantı</span>
                                </div>
                                <div className={classes.sgsFollowBtn}>
                                    Takip Et
                                </div>
                            </div>
                            <div className={classes.sliderItem}>
                                <img
                                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                    alt="asda"
                                />
                                <div>
                                    <h2>name surname</h2>
                                </div>
                                <div>
                                    <h3>username</h3>
                                </div>
                                <div>
                                    <span>12 Ortak Bağlantı</span>
                                </div>
                                <div className={classes.sgsFollowBtn}>
                                    Takip Et
                                </div>
                            </div>
                            <div className={classes.sliderItem}>
                                <img
                                    src="https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg"
                                    alt="asda"
                                />
                                <div>
                                    <h2>name surname</h2>
                                </div>
                                <div>
                                    <h3>username</h3>
                                </div>
                                <div>
                                    <span>12 Ortak Bağlantı</span>
                                </div>
                                <div className={classes.sgsFollowBtn}>
                                    Takip Et
                                </div>
                            </div>
                        </Carousel>
                    </div>
                </div>
                {modalOpen &&
                    <Modal
                        onClose={() => {
                            setModalOpen(false);
                        }}
                        children={
                            <div className={classes.newPostModal}>
                                <div className={classes.newPostHeader}>
                                    Yeni Gönderi
                                </div>
                                <div className={classes.descInput}>
                                    <input
                                        type="text"
                                        placeholder="Açıklama"
                                        onChange={(e) => {
                                            setPostDesc(e.target.value);
                                        }}
                                    />
                                </div>
                                <div>
                                    <input
                                        id="postFileInput"
                                        type="file"
                                        accept=".jpg"
                                        onChangeCapture={(e) => {
                                            setTempPostImg({
                                            ...e.target.files[0],
                                            path: e.target.value.replace('C:\\fakepath\\', ''),
                                            })
                                            var input = document.getElementById('postFileInput')
                                            var fReader = new FileReader()
                                            fReader.readAsDataURL(input.files[0])
                                            fReader.onloadend = function (event) {
                                            setPostImage(event.target.result)
                                            }
                                        }}
                                    />
                                </div>
                                <div className={classes.shareBtn} onClick={() => {
                                    shareNewPost();
                                    setModalOpen(false);
                                }}>Paylaş</div>
                            </div>
                        }
                    />
                }
            </div>
        </div>
    );
};

export default injectSheet(styles)(Home);


