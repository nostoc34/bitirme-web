const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    closeIcon: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        position: "fixed",
        top: "110px",
        right: "110px",
        '& svg': {
            width: "50px",
            height: "50px",
            '& path': {
                fill: "#0D3396"
            }
        }
    }
};
export default styles;