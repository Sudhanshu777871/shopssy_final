const { StyleSheet } = require("react-native");

const historyStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "orangered",
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 2,
        paddingBottom: 20
    },

    mainHistory: {
        color: "white",
        fontSize: 23,
        marginLeft:20
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        zIndex: 2,
        backgroundColor:"rgb(4, 66, 59)",
      
    },
    flatListStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 8,
        borderRadius: 5,
        backgroundColor: "rgb(229, 222, 222)",
    }
})

// exporing the historyStyle
export default historyStyle;