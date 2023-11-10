const { StyleSheet } = require("react-native");

const myStyleCart = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "orangered",
    },
    mainHead: {
        textAlign: 'center',
        color: "white",
        fontSize: 40,
        fontWeight: "bold"
    },
    cartStyle: {
        backgroundColor: "rgb(84, 81, 81)",
        borderWidth: 1,
        borderColor: "white"
    },
    cartBadgeNotify: {
        position: 'absolute',
        marginTop: -1,
    },
    bgCommon: {
        backgroundColor: "orangered",

    },
    productMainView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: 'space-around'
    },
 
    priceInput: {
        backgroundColor: "white",
        borderRadius: 3,
        paddingLeft: 10,
        marginTop:15
    }
}
)

export default myStyleCart;