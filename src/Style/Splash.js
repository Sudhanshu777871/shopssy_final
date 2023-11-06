import { StyleSheet } from 'react-native'
const myStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        flexDirection:"column",
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor:'black'
    },
    logo: {
        width: 200,
        height: 200,
        alignSelf: 'center'
    },
    brandName:{
        color:'white',
        fontSize:40,
        fontWeight:'bold',
        textAlign:'center'
    },
    activityIndicatorStyle:{
        marginTop:30
    }
    
})

export default myStyle;