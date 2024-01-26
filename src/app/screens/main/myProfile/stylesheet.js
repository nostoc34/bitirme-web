const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "8% 15%"
    },
    postSection: {
        display: "flex",
        gap: "30px",
        flexWrap: "wrap",
        marginTop: "50px"
    },
    editContainer: {
        display: "flex",
        gap: "100px",
        background: "#FFF",
        padding: "5%",
        borderRadius: "25px",
    },
    editLeftSection: {
        display: "flex",
        flexDirection : "column",
        justiftContent: "center",
        alignItems: "center",
        gap: "30px"
    },
    editPics: {
        width: "100%",
        display: "flex",
        flexDirection : "column",
        justiftContent: "center",
        alignItems: "center",
        gap: "10px",
        '& svg': {
            width: "30px",
            height: "30px",
            color: "#0D3396",
            cursor: "pointer"
        }
    },
    picContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        width:"200px",
        height: "200px",
        borderRadius: "50%",
        '& img': {
            width: "100%"
        }
    },
    editButtons: {
        display: "flex",
        flexDirection : "column",
        justiftContent: "center",
        alignItems: "center",
        gap: "10px",
        width: "100%",
        '& button, div': {
            width: "100%",
            padding: "5px 10px",
            background: "#0D3396",
            color: "#FFF",
            borderRadius: "25px",
            cursor: "pointer"
        }
    },
    editRightSection: {
        width: "100%",
        minWidth: "300px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        '& input, textarea': {
            width: "100%",
            border: "1px solid #FF7A00",
            borderRadius: "25px",
            padding: "15px",
            fontFamily: "'Inter', 'sans-serif'"
        },
        '& button': {
            width: "100%",
            padding: "10px",
            background: "#FF7A00",
            color: "#FFF",
            borderRadius: "25px",
            cursor: "pointer"
        }
    },
    switch: {
        display: "flex",
        alignItems: "center",
        color: "#FF7A00",
        fontWeight: "600",
        alignSelf: "flex-end",
        marginBottom: "20px"
    }

};

export default styles;