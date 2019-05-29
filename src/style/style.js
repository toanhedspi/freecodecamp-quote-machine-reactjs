

export const stylesGlobal = {

    /* OUTER DIV */
    backgroundDiv: {
        position: "absolute", 
        top: 0, 
        right: 0, 
        bottom: 0, 
        left: 0,
        transition: "all 500ms ease",
    },
    containerDiv: { 
        position: "fixed", 
        top: '50%', 
        left: '50%', 
        transform: "translate(-50%, -50%)" 
    },
    contentDiv: { 
        backgroundColor: '#fff', 
        padding: "40px 50px", 
        width: 450, 
        height: 'auto' 
    },

    /* INNER DIV (CONTENT) */
    quoteContainer: { 
        display: "inlineBlock", 
        textAlign: "center", 
        fontFamily: "'Raleway', sans-serif" 
    },
    quoteContent: { 
        margin: '0 auto', 
        fontSize: "28px", 
        fontWeight: 600, 
        lineHeight: 1.3 
    },
    authorContainer: { 
        padding: "20px 0 0", 
        textAlign: 'right', 
        fontSize: "16px", 
        fontWeight: 400, 
    },
    buttonList: { 
        marginTop: 15, 
        marginLeft: 5, 
    },
    socialButton: { 
        marginLeft: 5, 
        width: 50,
    },
    changeButton: {
        cursor: "pointer",
        float: "right", 
        height: 28, 
        color: "#fff", 
        fontSize: 13,
    },
    footerDiv: { 
        textAlign: "center", 
        margin: "15px 50px 30px", 
        color: "#fff" 
    },
}