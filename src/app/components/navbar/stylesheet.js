const styles = {
    container: {
        position: "absolute",
        top: 0,
        width: "100%",
        background: "#FF7A00",
        color: "#FFF",
        fontSize: "20px",
        fontWeight: "600",
        padding: "25px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    logo: {
        fontFamily: "'Irish Grover', 'system-ui'",
        fontSize: "48px"
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
        '&:hover' : {
            color: "#0D3396",
            '& svg': {
                '& path': {
                    fill: "#0D3396"
                }
            }
        },
        '& img': {
            height: "50px",
            width: "50px",
            borderRadius: "50px"
        }
    }

};
export default styles;
