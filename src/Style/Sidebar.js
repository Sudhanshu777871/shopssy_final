const { StyleSheet } = require("react-native");

const sideBar = StyleSheet.create({
    mainView:{
        flex:1,
         backgroundColor:'black',
         borderTopWidth:7,
         borderBlockColor:"rgb(11,160,142)"
    },
    avtar:{
        alignSelf:'center',
        marginTop:40,
        width:180,
        height:180
    },
    adminTxt:{
        color:"white",
        textAlign:'center',
        fontSize:25,
        marginTop:20,
        elevation:5
    },
    footerBrand:{
        color:"rgb(11, 195, 174)", 
        bottom:10, 
        textAlign:'center', 
        position:'absolute',
         alignSelf:"center"
    }
})

export default sideBar;