const styles = {
    noPost: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "200px",
        background: "#D5D3D3",
        borderRadius: "25px",
        color: "#FF7A00",
        fontSize: "24px",
        fontWeight: "600",
        padding: "0 20%",
    },
    content: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "50px",
        '& div': {
            textAlign: "center"
        },
        '& svg': {
            width: "100px",
            height: "100px"
        },
        '& span': {
            color: "#0D3396",
            cursor: "pointer"
        }
    }
}

export default styles;