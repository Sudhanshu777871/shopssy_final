const { StyleSheet } = require("react-native");

const setBill = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor:"orangered"
  
    },
    brandTxt: {
        color: "white",
        fontSize: 30,
        textAlign:"center",
        marginTop:'20%',
        fontWeight:"bold"
    },
    setDiscountBtn: {
        backgroundColor: "rgb(4, 66, 59)",
        width: '50%',
        alignSelf: "center",
        marginTop: 10,
        elevation: 5,
        borderRadius: 5
    }
})

export default setBill;