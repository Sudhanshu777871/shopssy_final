import { StyleSheet } from 'react-native'

const mainStyle = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: "rgb(223,80,19)",


    },
    menuStyle: {
        height: 43,
        borderRadius: 10,
        backgroundColor: "rgb(4, 66, 59)",
        elevation: 5,

    },
    bgCommon: {
        backgroundColor: "rgb(223,80,19)",
        borderBottomWidth: 2,
        borderBlockColor: 'white',
        elevation: 5,
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15

    },
    cartStyle: {
        backgroundColor: "rgb(84, 81, 81)",
        borderWidth: 1,
        borderColor: "white"
    },
    twoBtnIconMainView: {
        flexDirection: 'row', justifyContent: "space-evenly",
        marginTop: 20
    },
    twoIconsTop: {
        padding: 10,
        backgroundColor: "white",
        elevation: 5,
        marginLeft: 10
    },
    twoTxtIcon: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        marginTop: 10

    },
    billSectionView: {
        height: 320,
        width: '90%',
        backgroundColor: "white",
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: 10,
        padding: 10,
        elevation: 5
    },
    recentBillTxt: {
        color: "black",
        fontWeight: '500',
        fontFamily: "sans-serif",
        fontSize: 18
    },
    TitleSectionView: {
        flexDirection: 'row',
        height: 30,
        justifyContent: "space-between"
    },
    cartBadgeNotify: {
        position: 'absolute',
        marginTop: -1,

    },
    badgeNotify: {
        position: 'absolute',
        marginTop: -7
    },
    flatListStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        padding: 8,
        borderRadius: 5,
        backgroundColor: "rgb(229, 222, 222)"

    },
    downArrow: {
        borderWidth: 1,
        borderColor: "orange",
        alignSelf: 'center'
    },
    billAmount: {
        textAlign: 'center',
        fontSize: 15,
        backgroundColor: "rgb(87, 224, 208)",
        padding: 5,
        width: '80%',
        alignSelf: 'center',
        elevation: 2,
        borderRadius: 2,
        fontWeight: "bold"
    },
    referalRewardView: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 30
    },
    twoBtnRefAwa: {
        width: '40%',
        borderRadius: 4,
        elevation: 5,

    },
    setDiscount: {
        marginTop: 30,
        borderRadius: 3,
        width: '83%',
        alignSelf: 'center',
        elevation: 5,
        marginBottom: 40
    },
    modalContainerStyle: {
        backgroundColor: "rgb(11,160,142)",
        height: '45%',
        width: '90%',
        alignSelf: "center",
        elevation: 5,
        padding: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'grey'
    },
    refralCodeTxtHead: {
        textAlign: 'center',
        position: 'relative',
        fontSize: 22,
        fontWeight: "bold",
        color: "white"
    },
    referalView: {
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "space-between",
        elevation: 5,
        borderRadius: 5,
        marginTop: 10,
        paddingLeft: 20,
        paddingRight: 20
    },
    socialView: {
        flexDirection: "row",
        justifyContent: "center",
        marginTop: 10
    },
    modalContainerStyleDiscount: {
        backgroundColor: "rgb(207, 205, 205)",
        height: '55%',
        width: '90%',
        alignSelf: "center",
        elevation: 5,
        padding: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: 'grey'
    },
    discountCodeTxtHead: {
        textAlign: 'center',
        position: 'relative',
        fontSize: 22,
        fontWeight: "bold",
        color: "rgb(2, 138, 122)",
        marginBottom: 20,
        marginTop: 20
    },
    setDiscountBtn: {
        backgroundColor: "orangered",
        width: '50%',
        alignSelf: "center",
        marginTop: 10,
        elevation: 5,
        borderRadius: 5
    },
    couponSuggestStyle: {
        alignSelf: 'center',
        marginTop: 10,
        flexDirection: 'row'
    },
    coponSuggestionValStyle: {
        marginLeft: 3,
        borderWidth:1,
        borderColor:"purple"
    },
    couponCodeTxtHead: {
        textAlign: 'center',
        position: 'relative',
        fontSize: 22,
        fontWeight: "bold",
        color: "rgb(2, 138, 122)",
        marginBottom: 10,
        marginTop: 50
    }

})

export default mainStyle;