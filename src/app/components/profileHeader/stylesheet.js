const styles = {
    header: {
        display: "flex",
        alignItems: "center",
        width: "100%",
        background: "#0D3396",
        borderRadius: "25px",
        padding: "5% 7%",
        position: "relative"
    },
    profilePic: {
        width: "100%",
        maxWidth: "200px",
        height: "200px",
        marginRight: "10%",
        '& img': {
            width: "100%",
            borderRadius: "50%"
        }
    },
    info: {
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        color: "#FFF",
        fontSize: "24px",
        fontWeight: "600",
        marginRight: "15%",
    },
    infoItem: {
        '& span': {
            fontSize: "20px",
            fontWeight: "400"
        }
    },
    follow: {
        display: "flex",
        gap: "50px",
        fontSize: "32px",
        fontWeight: "600",
        color: "#FFF",
        '& div': {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px"
        }
    },
    editProfile: {
        position: "absolute",
        right: "5%",
        bottom: "5%",
        cursor: "pointer"
    },
    relations: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        position: "absolute",
        top: "5%",
        right: "5%",
        '& div' : {
            cursor: "pointer"
        }
    }
};

export default styles;