const styles = {
    post: {
        display: "flex",
        background: "#FFF",
        width: "1200px",
        height: "500px",
        borderRadius: "25px"
    },
    image: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        '& img': {
            width: "100%",
            minWidth: "700px",
            height: "100%",
            borderRadius: "25px 0 0 25px"
        }
    },
    info: {
        display: "flex",
        boxSizing: "border-box",
        flexDirection: "column",
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    description: {
        padding: "25px 10px 15px 10px",
        fontSize: "16px",
        color: "#FF7A00"
    },
    likeComment: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        fontSize: "24px",
        fontWeight: "600",
        color: "#0D3396",
        padding: "5px"
    },
    lcItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2px"
    },
    newComment: {
        display: "flex",
        flexDirection: "row",
        gap: "5px",
        width: "100%",
        padding: "10px 7%",
        position: "relative",
        '& input': {
            border: "1px solid #0D3396",
            borderRadius: "25px",
            width: "100%",
            padding: "7px 12px"
        },
        '& div': {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            top: "50%",
            right: "8%",
            transform: "translate(0, -50%)",
            '& svg': {
                width: "25px",
                height: "25px",
                color: "#0D3396",
                cursor: "pointer"
            }
        }

    },
    bottomSection: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 7%"
    },
    commentsSection: {
        width: "100%",
        height: "311px",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px"
    },
    comment: {
        width: "100%",
        padding: "5px 7px",
        fontSize: "14px",
        border: "1px solid #FF7A00",
        borderRadius: "25px"
    },
    likeBtn: {
        paddingBottom: "10px",
        '& svg': {
            width: "35px",
            height: "35px",
            color: "#0D3396",
            cursor: "pointer"
        }
    },
    userInfo: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        '& span': {
            fontWeight: "600",
            fontSize: "16px"
        }
    },
    profilePic: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "50px",
        height: "30px",
        width: "30px",
        '& img': {
            width: "100%",
        }
    }
};

export default styles;