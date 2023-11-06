const { StyleSheet } = require("react-native");

const privacyStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "rgb(4, 66, 59)"
    },
    brandTxt: {
        color: "white",
        textAlign: 'center',
        fontSize: 30,
        marginTop: 22,
        fontWeight: "500"
    },
    headPrivacy: {
        color: "orangered",
        fontSize: 20,
        fontWeight: '500'
    },
    mainContentPrivacy: {
        width: '90%',
        marginLeft: '5%',
        marginTop: 20,
        marginBottom:30
    },
    privacyContent: {
        color: "white", 
        fontSize: 15, 
        textAlign: 'justify', 
        textTransform: 'capitalize', 
        marginTop: 10
    },
    secondaryHeadPrivacy: {
        color: "orangered",
        fontSize: 17,
        fontWeight: '400',
        marginTop:20
    },
    iHaveRead:{
        width:'60%', 
        marginLeft:'20%',
         marginTop:20,
         borderColor:"orangered",
         borderWidth:1
    }

})

export default privacyStyle;