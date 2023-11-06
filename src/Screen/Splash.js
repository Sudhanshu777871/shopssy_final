import { React, useEffect } from 'react'
import { Image, View, StatusBar, Text, ActivityIndicator } from 'react-native'
import myStyle from '../Style/Splash'
import AsyncStorage from '@react-native-async-storage/async-storage';
function Splash({ navigation }) {
    // code for useeffect for navigate to Welcome Screen
    useEffect(() => {
        const checkUser = async () => {
            const getUserPhone = await AsyncStorage.getItem('userPhone');
            if (getUserPhone !== null) {
                navigation.navigate('DrawerMiddle');
            } else {
                navigation.navigate('Welcome');
            }
        };
    
        setTimeout(checkUser, 1000); // Call the async function after a delay
    }, []);
    

    return (
        <View style={myStyle.mainView}>
            <StatusBar hidden />
            <View></View>
            <View>
                <Image source={require('../Img/splash.png')} style={myStyle.logo} />
                <Text style={myStyle.brandName}>SHOPSY</Text>
                <ActivityIndicator size={'large'} color={'rgb(11,160,142)'} style={myStyle.activityIndicatorStyle} />
            </View>


            <Text style={{ color: "white", justifyContent: "flex-end" }}>Powered By Shopsy</Text>

        </View>
    )
}

export default Splash
