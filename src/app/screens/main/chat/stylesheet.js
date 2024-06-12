const styles = {
    container: {
        display: "flex",
        padding: "10% 10%",
        height: "100vh",
        overflow: "hidden",
        width: "100%",
        justifyContent: "space-between"
    },
    conversations: {
        width: "30%"
    },
    newConversationBtn: {
        background: "#0D3396",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100px",
        borderRadius: "25px",
        color: "#FFF",
        flexDirection: "column",
        '& span': {
            fontSize: "20px",
            fontWeight: "600"
        },
        cursor: "pointer",
        marginBottom: "10px"
    },
    convItem: {
        background: "#0D3396",
        display: "flex",
        height: "100px",
        flexDirection: "row",
        marginBottom: "10px",
        borderRadius: "25px",
        padding: "0 20px",
        color: "#FFF",
        cursor: "pointer"
    },
    convImgBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        '& img': {
            width: "80px",
            height: "80px",
            borderRadius: "50%"
        },
        marginRight: "30px"
    },
    convsRightSide: {
        padding: "20px 0",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        width: "100%"
    },
    targetUserName: {
        color: "#FF7A00",
        fontWeight: "700",
        fontSize: "24px"
    },
    lastMessageMe: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end"
    },
    lastMessageYou: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-start"
    },
    chat: {
        width: "60%",
        height: "70vh",
        border: "3px solid #0D3396",
        borderRadius: "25px"
    },
    chatHeader: {
        padding: "10px 15px",
        height: "13vh",
        background: "#0D3396",
        borderRadius: "20px 20px 0 0",
        display: "flex",
        gap: "30px",
        alignItems: "center",
        '& img': {
            width: "90px",
            height: "90px",
            borderRadius: "50%"
        },
        '& span': {
            color: "#FF7A00",
            fontSize: "36px",
            fontWeight: "700"
        }
    },
    messageSection: {
        padding: "30px",
        display: "flex",
        flexDirection: "column-reverse",
        height: "50vh",
        overflowY: "scroll"
    },
    myMessage: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginBottom: "10px",
        flexDirection: "row-reverse",
        '& img': {
            width: "50px",
            height: "50px",
            borderRadius: "50%"
        },
        '& span': {
            background: "rgba(255, 122, 0, 0.3)",
            padding: "10px 15px",
            borderRadius: "25px",
            fontSize: "20px",

        }
    },
    otherMessage: {
        display: "flex",
        alignItems: "center",
        gap: "20px",
        marginBottom: "10px",
        '& img': {
            width: "50px",
            height: "50px",
            borderRadius: "50%"
        },
        '& span': {
            background: "rgba(255, 122, 0, 0.3)",
            padding: "10px 15px",
            borderRadius: "25px",
            fontSize: "20px",

        }
    },
    sendMessageSection: {
        background: "rgba(13, 51, 150, 0.2)",
        height: "7vh",
        borderRadius: "0 0 20px 20px",
        '& input': {
            background: "transparent",
            fontSize: "20px",
            color: "#FF7A00",
            width: "95%"
        },
        display: "flex",
        alignItems: "center",
        padding: "0 30px",
        color: "#FF7A00",
        justifyContent: "space-between",
        '& svg': {
            cursor: "pointer"
        }
    },
    stateCard: {
        width: "60%",
        height: "70vh",
        border: "3px solid #0D3396",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        '& img': {
            width: "70%"
        },
        '& span': {
            fontSize: "48px",
            fontWeight: "700",
            color: "#FF7A00",
            marginTop: "30px",
            cursor: "pointer"
        }
    },
    friendModal: {
        background: "#FFF",
        padding: "100px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "25px",
        height: "50vh",
        overflowY: "scroll"
    },
    friendItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "300px",
        '& img': {
            width: "80px",
            height: "80px",
            borderRadius: "50%"
        },
        background: "#FF7A00",
        padding: "15px",
        borderRadius: "25px",
        cursor: "pointer"
    },
    friendNames: {
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        color: "#FFF",
        fontSize: "18px",
        '& div': {
            textAlign: "right"
        }
    }
};

export default styles;