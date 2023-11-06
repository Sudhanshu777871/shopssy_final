const { StyleSheet } = require("react-native");

const profileStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "rgb(4, 66, 59)"
    },
    brandTxt: {
        textAlign: 'center',
        color: "white",
        fontSize: 30,
        fontWeight: "bold",
    },
    avtarStyle: {
        width: 130,
        height: 130,
        alignSelf: 'center',
        marginTop: 20
    },

    profileDetailsView: {
        width: '60%',
        margin: 'auto',
        alignSelf: 'center',
        alignItems: "center",
        marginTop: 20
    },
    detailsTyleTxt: {
        color: "white",
        fontSize: 15,
        fontSize: 20
    },
    inputTextStyleWidth: {
        width: '90%',
        alignSelf: "center",
        marginTop: 10
    },

    changePassBtn: {
        width: '60%',
        alignSelf: "center",
        marginTop: 30,
        borderRadius: 5,
        backgroundColor: "orangered",
        elevation: 5,
    },
    changePassHead: {
        color: "white",
        fontSize: 20,
        backgroundColor: "rgb(116, 113, 113)",
        width: 'auto',
        textAlign: "center",
        padding: 5,
        borderRadius: 3,
        marginBottom:5
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        fontWeight:"500",
        marginLeft:20
      }

})

// exporting the style
export default profileStyle;