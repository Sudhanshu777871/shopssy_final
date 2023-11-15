import { React, useState } from 'react'
import { View, StatusBar, Text, FlatList, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Appbar, Avatar, Badge, IconButton, MD3Colors, Button, Portal, Modal, TextInput, Chip } from 'react-native-paper';
import { BarChart } from 'react-native-chart-kit';
import mainStyle from '../Style/Main';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import AsyncStorage from '@react-native-async-storage/async-storage';

const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    datasets: [
        {
            data: [40000, 80000, 50000, 30000], // Customize data points
        },
    ],
};

const chartConfig = {
    backgroundGradientFrom: 'rgb(175, 169, 169)',
    backgroundGradientTo: 'white',
    color: (opacity = 1) => `rgba(4, 66, 59, ${opacity})`,
    barPercentage: 0.8, // Adjust the width of the bars
    style: { borderRadius: 40 },

};

function Home({ navigation }) {


    const [visible, setVisible] = useState(false);
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    const [rewardVisible, setRewardVisible] = useState(false);
    const showRewardModal = () => setRewardVisible(true);
    const hideRewardModal = () => setRewardVisible(false);

    const [coupenVisible, setCoupenVisible] = useState(false);

    const showCoupen = () => setCoupenVisible(true);
    const hideCoupen = () => setCoupenVisible(false);

    // useState for Shop Budget
    const [shopBudget, setShopBudget] = useState('0');
    // usestate for coupon val
    const [cuponVal, setCouponVal] = useState('0');
    // CODE FOR HIDDING BUDGET AND SHOW COUPEN
    const handlePress = async (val, isSkipped) => {
        //   code for storing the value At LocalStorage

        isSkipped ? await AsyncStorage.setItem("budget", 0) : val == '' ? await AsyncStorage("budget", 0) : await AsyncStorage.setItem("budget", val)
        // code for hidding and showing budget and coupon
        hideRewardModal();
        showCoupen();
    };

    // CODE FOR TRANSFER COUPON TO CAMERA
    const transferCoupon = async () => {
        //    code for set cupon 
        cuponVal == '' ? await AsyncStorage.setItem("couponCode", 0) : await AsyncStorage.setItem("couponCode", cuponVal)

        // Call both functions when the component is pressed.
        hideCoupen();
        navigation.navigate('Camera');
    }

    // FUNCTION FOR SKIP COUPON 
    const skipCoupon = async () => {
        await AsyncStorage.setItem("couponCode", 0)
        // Call both functions when the component is pressed.
        hideCoupen();
        navigation.navigate('Camera');
    }
    // code for demo data
    const demoData = [
        {
            itemPrice: 900,
            date: '23/05/23'
        },
        {
            itemPrice: 1500,
            date: '24/05/23'
        },
        {
            itemPrice: 2000,
            date: '28/05/23'
        },
        {
            itemPrice: 300,
            date: '30/05/23'
        }
    ]


    return (
        <KeyboardAwareScrollView
            contentContainerStyle={{ flex: 1 }}
            extraHeight={100} // Adjust this value as needed
        >
            <View style={mainStyle.mainView}>
                <StatusBar backgroundColor="rgb(223,80,19)" />

                {/* CODE FOR THREE MENU */}
                <Appbar.Header style={mainStyle.bgCommon}>
                    <Appbar.Action icon="menu" onPress={() => { navigation.openDrawer() }} style={mainStyle.menuStyle} color='white' />

                    <Appbar.Content title="Shopssy" color='white' style={{ alignItems: 'center', fontWeight: 'bold' }} />

                    <View>
                        <Appbar.Action icon="cart" style={mainStyle.cartStyle} color='white' />
                        <Badge style={mainStyle.cartBadgeNotify} size={22}>3</Badge>
                    </View>
                </Appbar.Header>

                <ScrollView>

                    {/* CODE FOR PRODUCT SCANNING AND BUYING LIST SECTION */}
                    <View style={mainStyle.twoBtnIconMainView}>
                        <TouchableOpacity onPress={showRewardModal}>
                            <Avatar.Icon size={55} icon="camera" style={mainStyle.twoIconsTop} color='rgb(4, 66, 59)' />
                            <Text style={mainStyle.twoTxtIcon}>Scan Product</Text>
                        </TouchableOpacity>
                        <View>
                            <Avatar.Icon size={55} icon={require('../Img/list.png')} style={mainStyle.twoIconsTop} color='rgb(4, 66, 59)' />
                            <Text style={mainStyle.twoTxtIcon}>Shoping List</Text>
                        </View>
                    </View>
                    {/* CODE FOR REFER & REWARD SECTION */}

                    <View style={mainStyle.referalRewardView}>
                        <Button icon="share" mode="contained" onPress={showModal} dark={true} style={{ borderRadius: 3, width: '40%', backgroundColor: "rgb(4, 66, 59)", elevation: 5 }} >
                            Referal
                        </Button>

                        <Button icon="trophy" mode="contained" dark={true} style={{ borderRadius: 3, marginLeft: 10, width: '40%', backgroundColor: "rgb(4, 66, 59)", elevation: 5 }}>
                            Reward Points
                        </Button>

                    </View>

                    {/* CODE FOR SHOWING THE BILL */}
                    <View style={mainStyle.billSectionView}>
                        <View style={mainStyle.TitleSectionView}>
                            <Text style={mainStyle.recentBillTxt}>Recent Bills</Text>
                            <View>
                                <Avatar.Icon size={26} icon="bell" style={{ backgroundColor: 'rgb(4, 66, 59)' }} />
                                <Badge style={mainStyle.badgeNotify} size={18}>3</Badge>
                            </View>
                        </View>


                        {/* CODE FOR SHOWING THE BILL DATA */}

                        <FlatList
                            data={demoData}
                            renderItem={({ item }) => (
                                <View style={mainStyle.flatListStyle}>
                                    <Text style={{ fontWeight: "normal", color: "white" }}>INR {item.itemPrice}</Text>
                                    <Text style={{ fontWeight: "normal", color: "white" }}>{item.date}</Text>
                                </View>
                            )}
                        />


                        {/* CODE FOR EXPANDING THE BILL */}
                        <IconButton
                            icon="chevron-down"
                            mode='contained-tonal'
                            iconColor={MD3Colors.information}
                            size={25}
                            style={mainStyle.downArrow} containerColor='orangered' onPress={() => { navigation.navigate('history') }}
                        />
                        <Text style={mainStyle.billAmount}>Total Amount : INR 4700</Text>

                    </View>

                    {/* CODE FOR CHART */}
                    <Text style={{ color: "white", marginLeft: 15, fontSize: 18, marginTop: 5, color: "white", fontWeight: 500 }}>Expense Data</Text>
                    <View style={{ alignSelf: 'center', marginTop: 10, marginBottom: 20 }}>
                        <BarChart
                            data={chartData}
                            width={Dimensions.get('window').width - 30}
                            height={200}
                            chartConfig={chartConfig} verticalLabelRotation={10}
                        />
                    </View>

                </ScrollView>

                {/* CODE FOR REFERAL PORTAL MODAL */}
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={mainStyle.modalContainerStyle}>
                        <Text style={mainStyle.refralCodeTxtHead}>Referal Code</Text>

                        <View style={mainStyle.referalView}>
                            <Text style={{ fontSize: 20, marginTop: 10 }}>skshopsyredd887</Text>
                            <IconButton mode='contained-tonal' icon="content-copy" iconColor={MD3Colors.error50} size={25} />

                        </View>

                        <Text style={{ marginTop: 10, color: "white", textAlign: 'center', fontSize: 18, }}>Share On</Text>
                        <View style={mainStyle.socialView}>
                            <IconButton mode='contained-tonal' icon="whatsapp" iconColor={"green"} size={25} />

                            <IconButton mode='contained-tonal' icon="email" iconColor={MD3Colors.error50} size={25} />

                            <IconButton mode='contained-tonal' icon="skype" iconColor={"rgb(47, 47, 237)"} size={25} />
                        </View>

                    </Modal>
                </Portal>

                {/* CODE FOR SHOPING BUDGET PORTAL MODAL */}
                <Portal>
                    <Modal visible={rewardVisible} onDismiss={hideRewardModal} contentContainerStyle={mainStyle.modalContainerStyleDiscount}>

                        <Text style={mainStyle.discountCodeTxtHead}>Set Shoping Budget</Text>

                        <TextInput label="Budget" mode='outlined' cursorColor="orangered" keyboardType='numeric' activeOutlineColor='orangered' outlineColor="black" textColor={"black"} maxLength={7} value={shopBudget} onChangeText={(txt) => { setShopBudget(txt) }} />

                        {/* CODE FOR BUTTON */}
                        <Button icon="send" mode="contained" style={mainStyle.setDiscountBtn} onPress={() => { handlePress(shopBudget, false) }}>
                            Set Budget
                        </Button>
                        <Button mode="elevated" style={{ width: '40%', alignSelf: 'center', marginTop: 20 }} textColor='orangered' onPress={() => { handlePress(shopBudget, true) }}>
                            Skip
                        </Button>
                    </Modal>
                </Portal>

                {/* CODE FOR CUPON CODE PORTAL MODAL */}
                <Portal>
                    <Modal visible={coupenVisible} onDismiss={hideCoupen} contentContainerStyle={mainStyle.modalContainerStyleDiscount}>
                        <Text style={mainStyle.couponCodeTxtHead}>Store Coupon Code</Text>
                        <TextInput label="Coupon" mode='outlined' cursorColor="orangered" keyboardType='numeric' activeOutlineColor='orangered' outlineColor="black" textColor={"black"} style={{ width: '40%', alignSelf: 'center' }} onChangeText={(txt) => { setCouponVal(txt) }} maxLength={2} value={cuponVal} />
                        {/* code for auto coupon */}
                        <View style={mainStyle.couponSuggestStyle}>
                            <Chip style={mainStyle.coponSuggestionValStyle} onPress={() => { setCouponVal("10") }}>10 %</Chip>
                            <Chip style={mainStyle.coponSuggestionValStyle} onPress={() => { setCouponVal("20") }}>20 %</Chip>
                            <Chip style={mainStyle.coponSuggestionValStyle} onPress={() => { setCouponVal("30") }}>30 %</Chip>
                            <Chip style={mainStyle.coponSuggestionValStyle} onPress={() => { setCouponVal("40") }}>40 %</Chip>
                            <Chip style={mainStyle.coponSuggestionValStyle} onPress={() => { setCouponVal("50") }}>50 %</Chip>
                        </View>
                        {/* CODE FOR BUTTON */}
                        <Button icon="send" mode="contained" style={mainStyle.setDiscountBtn} onPress={transferCoupon}>
                            Next
                        </Button>
                        <Button mode="elevated" style={{ width: '40%', alignSelf: 'center', marginTop: 20 }} textColor='orangered' onPress={skipCoupon}>
                            Skip
                        </Button>
                    </Modal>
                </Portal>
            </View>
        </KeyboardAwareScrollView>

    )
}

export default Home
