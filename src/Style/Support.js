const { StyleSheet } = require("react-native");

const supportStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "rgb(4, 66, 59)",
        justifyContent: "center",
        position:'relative'
    },
    mainSupportHead: {
        color: "white",
        textAlign: "center",
        fontSize: 35,
        fontWeight: "600",
        marginBottom: 20,
    },
    imageSupport: {
        width: '90%',
        height: 200,
        objectFit: "cover",
        alignSelf: 'center'
    },
    subHeadTxt: {
        color: "white",
        marginTop: 10,
        fontSize: 20,
        textAlign: 'center'
    },
    textAreaStyle: {
        width: '90%',
        height: 110,
        borderWidth: 1,
        paddingHorizontal: 10,
        fontSize: 16, 
        alignSelf: "center", 
        borderRadius: 10, 
        backgroundColor: "white", 
        color: "black", 
        elevation: 5,
         marginTop: 20,
          margin: 'auto'
    },
    sendBtn:{
        width: '70%',
        alignSelf: "center",
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: "orangered",
        elevation: 5,
    }
})

export default supportStyle;