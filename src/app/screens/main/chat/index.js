import React, { useState, useEffect } from "react";
import injectSheet from "react-jss";
import styles from "./stylesheet";
import Modal from "../../../components/modal";
import Navbar from "../../../components/navbar";
import { Icon } from "@iconify/react";
import { io } from "socket.io-client";

import { client } from "../../../../service";
import sendMessage from "../../../../service/mutation/sendMessage";
import newConversation from "../../../../service/mutation/newConversation";
import getMessages from "../../../../service/query/getMessages";
import getConversations from "../../../../service/query/getConversations";
import getFollowings from "../../../../service/query/getFollowings";


//const theUser = JSON.parse(window.localStorage.getItem("user"));


const Chat = ({ classes }) => {
    const theUser = JSON.parse(window.localStorage.getItem("user"));

    const socket = io("ws://localhost:4001", {
        extraHeaders: {
            authorization: theUser.userID
        }
    });

    const [conversations, setConversations] = useState([]);
    const [conversationID, setConversationID] = useState("");
    const [messages, setMessages] = useState();
    const [message, setMessage] = useState("");
    const [send, setSend] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [followings, setFollowings] = useState([]);

    const getConversationsData = () => {
        client
            .query({
                query: getConversations,
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
                setConversations(res.data.getConversations.data);
            })
            .catch((err) => {
                console.error("getConversations error:", err);
            });
    };

    const getFollowingsData = () => {
        client
            .query({
                query: getFollowings,
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
                setFollowings(res.data.getFollowings.data);
            })
            .catch((err) => {
                console.error("getFollowings error:", err);
            });
    };

    const getMessagesData = (id) => {
        client
            .query({
                query: getMessages,
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
                    conversationID: id,
                },
            })
            .then((res) => {
                setMessages(res.data.getMessages.data);
            })
            .catch((err) => {
                console.error("getMessages error:", err);
            });
    };

    const sendMessageFunc = () => {        
        client
            .mutate({
                mutation: sendMessage,
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
                    conversationID: conversationID,
                    message: message,
                },
            })
            .then((res) => {
                const response = res.data.sendMessage;
                getConversationsData();
                getMessagesData(response.data.conversationID);
                socket.emit("send-message", {
                    conversationID: conversationID,
                    message: message,
                    users: [conversations.find(e => e.id === conversationID).targetUserInfo.userID, theUser.userID]
                });
            })
            .catch((err) => {
                console.error("sendMessage error:", JSON.stringify(err));
            });
           
    };

    const handleNewConversation = (id) => {
        client
            .mutate({
                mutation: newConversation,
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
                    targetID: id,
                },
            })
            .then((res) => {
                const response = res.data.newConversation;
                getMessagesData(response.data.id);
                getConversationsData();
                setConversationID(response.data.id);
            })
            .catch((err) => {
                console.error("newConversation error:", JSON.stringify(err));
            });
    }

    useEffect(() => {
        getConversationsData();
        getFollowingsData();
        socket.on("connect", () => {
            console.log("Connected.");
        });

        socket.on("message-received", (payload) => {
            console.log("Yeni mesaj geldi:", payload);
            getConversationsData();
            getMessagesData(payload.conversationID);
        });
    }, []);

    useEffect(() => {
        getMessagesData(conversationID);
    }, [send]);

    return (
        <>
            <Navbar />
            <div className={classes.container}>
                <div className={classes.conversations}>
                    <div
                        className={classes.newConversationBtn}
                        onClick={() => {
                            setModalOpen(true);
                        }}
                    >
                        <Icon
                            icon="mingcute:plus-fill"
                            width="36"
                            height="36"
                        />
                        <span>Yeni Sohbet</span>
                    </div>
                    {conversations.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={classes.convItem}
                                onClick={() => {
                                    getMessagesData(item.id);
                                    setConversationID(item.id);
                                }}
                            >
                                <div className={classes.convImgBox}>
                                    <img
                                        src={item.targetUserInfo.profilePhoto}
                                        alt="pp"
                                    />
                                </div>
                                <div className={classes.convsRightSide}>
                                    <div className={classes.targetUserName}>
                                        {item.targetUserInfo.userName}
                                    </div>
                                    {item.lastMessage.senderID && item.lastMessage.senderID ===
                                    theUser.userID ? (
                                        <div className={classes.lastMessageMe}>
                                            {item.lastMessage.message}
                                        </div>
                                    ) : (
                                        <div className={classes.lastMessageYou}>
                                            {item.lastMessage.message}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
                {messages && messages !== undefined ? (
                    <div className={classes.chat}>
                        <div className={classes.chatHeader}>
                            <img
                                src={
                                    messages.usersPayload.find(
                                        (e) => e.userID !== theUser.userID
                                    ).profilePhoto
                                }
                                alt="pp"
                            />
                            <span>
                                {
                                    messages.usersPayload.find(
                                        (e) => e.userID !== theUser.userID
                                    ).userName
                                }
                            </span>
                        </div>
                        <div className={classes.messageSection}>
                            {messages.messages.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className={
                                            item.senderID === theUser.userID
                                                ? classes.myMessage
                                                : classes.otherMessage
                                        }
                                    >
                                        <img
                                            src={
                                                messages.usersPayload.find(
                                                    (e) =>
                                                        e.userID ===
                                                        item.senderID
                                                ).profilePhoto
                                            }
                                            alt="pp"
                                        />
                                        <span>{item.message}</span>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={classes.sendMessageSection}>
                            <input
                                type="text"
                                placeholder="Birşeyler yaz..."
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                                value={message}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        sendMessageFunc();
                                        setSend(!send);
                                        setMessage("");
                                    }
                                }}
                            />
                            <Icon
                                icon="tabler:send"
                                width="36"
                                height="36"
                                onClick={() => {
                                    sendMessageFunc();
                                    setSend(!send);
                                    setMessage("");
                                }}
                            />
                        </div>
                    </div>
                ) : (
                    <div className={classes.stateCard}>
                        <img
                            src="http://localhost:4000/upload/chat.png"
                            alt="statecard"
                        />
                        <span
                            onClick={() => {
                                setModalOpen(true);
                            }}
                        >
                            Sohbete Başla!
                        </span>
                    </div>
                )}
            </div>
            {modalOpen ? (
                <Modal
                    onClose={() => {
                        setModalOpen(false);
                    }}
                    children={
                        <div
                            onClick={(e) => {
                                e.stopPropagation();
                            }}
                            className={classes.friendModal}
                        >
                            {followings.map((item, index) => {
                                return (
                                    <div
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            handleNewConversation(item.userID);
                                            setModalOpen(false);
                                        }}
                                        key={index}
                                        className={classes.friendItem}
                                    >
                                        <img src={item.profilePhoto} alt="pp" />
                                        <div className={classes.friendNames}>
                                            <div> {item.userName} </div>
                                            <div> {item.fullName} </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    }
                />
            ) : null}
        </>
    );
};

export default injectSheet(styles)(Chat);
