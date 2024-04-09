const styles = {
    container: {
        display: "flex",
        padding: "0 5%",
        height: "100vh",
        overflow: "hidden",
        width: "100%"
    },
    postSection: {
        display: "flex",
        flexDirection: "column",
        gap: "25px",
        height: "100vh",
        overflowY: "auto",
        padding: "8% 0",
        '&::-webkit-scrollbar': {
            display: "none"
       }
    },
    sideSection: {
        padding: "8% 0 2% 3%",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        alignItems: "center",
        gap: "50px",
        width: "30%"
    },
    newPost: {
        width: "100%",
        fontSize: "24px",
        fontWeight: "700",
        color: "#FFF",
        background: "#0D3396",
        padding: "20px 20px",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        cursor: "pointer",
        '& svg': {
            width: "40px",
            height: "40px"
        }
    },
    suggestion: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
        gap: "20px",
        border: "2px solid #0D3396",
        borderRadius: "25px",
        background: "#FFF",
        padding: "8% 0"
    },
    sgsHeader: {
        fontSize: "24px",
        fontWeight: "600",
        color: "#0D3396",
        marginBottom: "30px"
    },
    slider: {
        width: "100%",
        height: "100%",
        '& div': {
            height: "100%"
        },
        '.dot': {
            background: "#FF7A00"
        }
    },
    sliderItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "ceneter",
        gap: "10px",
        width: "100%",
        '& img': {
            width: "150px !important",
            height: "150px !important",
            borderRadius: "50%",
            marginBottom: "20px"
        },
        '& h3, h2': {
            margin: 0
        },
        '& span': {
            fontWeight: "400",
            fontSize: "12px",
            marginTop: "30px"
        }
    },
    sgsFollowBtn: {
        background: "#0D3396",
        color: "#FFF",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 20px",
        width: "150px",
        borderRadius: "25px",
        cursor: "pointer",
        marginTop: "30px"
    },
    newPostModal: {
        background: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "7%",
        gap: "20px",
        borderRadius: "25px",
        '& svg': {
            color: "#0D3396"
        }
    },
    successPost: {
        fontSize: "48px",
        fontWeight: "900",
        color: "#0D3396"
    },
    newPostHeader: {
        textAlign: "center",
        fontSize: "24px",
        fontWeight: "600",
        color: "#0D3396",
        marginBottom: "30px"
    },
    descInput: {
        width: "400px",
        '& input': {
            width: "100%",
            border: "1px solid #FF7A00",
            padding: "10px",
            borderRadius: "25px"
        }
    },
    shareBtn: {
        width: "200px",
        padding: "10px",
        background: "#0D3396",
        color: "#FFF",
        borderRadius:"25px",
        textAlign: "center",
        cursor: "pointer"
    },
    emptyHome: {
        width: "1200px",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "36px",
        fontWeight: "700",
        color: "#FF7A00"
    }
};

export default styles;