const styles = {
    post: {
        width: "310px",
        height: "310px",
        position: "relative",
        marginBottom: "30px",
        cursor: "pointer",
        transition: "1s linear all",
        '& img' : {
            width: "100%",
            height: "310px",
            borderRadius: "25px",
            transition: "1s linear all",
        },
        "&:hover": {
            "& > img": {
                opacity: "0.3",
                transition: "1s linear all",
            },
            "& > div": {
                transition: "1s linear all",
                opacity: "1",
            },
        },
    },
    info: {
        position: "absolute",
        left: "10%",
        top: "10%",
        color: "#FF7A00",
        fontWeight: "600",
        opacity: "0",
        transition: "1s linear all",
    },
    infoItem: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: "5px"
    }

};

export default styles;