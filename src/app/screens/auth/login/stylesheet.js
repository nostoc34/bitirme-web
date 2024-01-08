const styles = {
    container: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        position: "relative",
        boxSizing: "border-box"
    },
    loginContainer: {
        border: "2px solid #0D3396",
        borderRadius: "25px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "50%"
    },
    header: {
        width: "100%",
        color: "#FFF",
        background: "#0D3396",
        fontFamily: "'Irish Grover', 'system-ui'",
        fontSize: "64px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "45px 0",
        borderRadius: "20px 20px 0 0",
    },
    inputContainer: {
        width: "100%",
        padding: "50px 40px 30px 40px",
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        //boxSizing: "border-box",
        '& input': {
            padding: "15px",
            fontSize: "16px",
            border: "1px solid #FF7A00",
            borderRadius: "25px",
            textAlign: "center"
        },
    },
    inputBox: {},
    buttonAndForgot: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        marginBottom: "40px",
        '& button': {
            fontSize: "20px",
            color: "#FFF",
            padding: "10px",
            borderRadius: "25px",
            background: "#0D3396",
            width: "300px"
        },
        '& span': {
            cursor: "pointer",
            fontSize: "12px",
        }
    },
    redirectRegister: {
        fontSize: "20px",
        marginBottom: "40px",
        '& span': {
            fontWeight: "700",
            color: "#FF7A00",
            cursor: "pointer"
        }
    }
};
export default styles;
