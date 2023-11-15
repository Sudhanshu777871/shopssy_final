const { StyleSheet } = require("react-native");

const cameraStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "rgb(4, 66, 59)",
        justifyContent:"center",
        alignItems:'center'
    },
    detectedText:{
        fontSize:15,
        color:"white",
    }

})
// exporting 
export default cameraStyle;