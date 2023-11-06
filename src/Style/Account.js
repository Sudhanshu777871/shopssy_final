const { StyleSheet } = require("react-native");

const accountStyle = StyleSheet.create({
    mainView: {
        backgroundColor: 'rgb(4, 66, 59)',
        flex: 1
    },
    brandName: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
        marginTop: 30,
        textAlign: "center"
    },
    loginView: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 10,
        padding:3,
        elevation:5
    },
    inputStyle: {
        marginTop: 20
    },
    loginBtn: {
        marginTop: 50,
        width: '70%',
        alignSelf: 'center',
        borderRadius: 7
    },
    divider: {
        marginTop: 60
    },
    newAccount: {
        color: "white",
        fontSize: 23,
        textAlign: 'center',
        fontWeight: '500',
        marginTop: 30
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        fontWeight:"500"
      },
})

export default accountStyle;