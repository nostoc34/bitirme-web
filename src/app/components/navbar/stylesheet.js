const styles = {
    container: {
        width: "100%",
        background: "#FF7A00",
        color: "#FFF",
        fontSize: "20px",
        fontWeight: "600",
        padding: "25px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "fixed",
        top: "0",
        zIndex: 100
    },
    logo: {
        fontFamily: "'Irish Grover', 'system-ui'",
        fontSize: "48px",
        cursor: "pointer"
    },
    menu: {
        display: "flex",
        flexDirection: "row",
        gap: "60px"
    },
    links: {
        display: "flex",
        flexDirection: "row",
        gap: "20px"
    },
    personalSection: {
        display: "flex",
        flexDirection: "row",
        gap: "20px"
    },
    menuItem: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        '& svg': {
            width: "30px",
            height: "30px"
        },
        '&:hover' : {
            color: "#0D3396",
            '& svg': {
                '& path': {
                    fill: "#0D3396"
                }
            }
        },
    },
    profilePic: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        borderRadius: "50px",
        height: "50px",
        width: "50px",
        '& img': {
            width: "100%",
        }
    }

};
export default styles;
