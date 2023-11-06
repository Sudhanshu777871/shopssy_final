import { StyleSheet } from 'react-native'

const welcomeStyle = StyleSheet.create({
    mainComp: {
        flex: 1,
        backgroundColor: "rgb(4, 66, 59)",
        justifyContent: 'center',

    },
    welcomeBanner: {
        height: 380,
        width: 380,
        objectFit: 'contain',
        alignSelf: "center"
    },
    brandName: {
        color: "white",
        fontSize: 33,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:-30
    },
    btnStyle: {
        width: '80%',
        alignSelf: 'center',
        padding:2,
        marginTop:80,
        borderRadius:5
    }

})

export default welcomeStyle