import React from 'react'
import { View, Image, StatusBar } from 'react-native'
import { Button } from 'react-native-paper';
import welcomeStyle from '../Style/Welcome'
import { Text } from 'react-native-paper'

function Welcome({navigation}) {
    return (
        <View style={welcomeStyle.mainComp}>
            <StatusBar backgroundColor={"rgb(11,160,142)"}/>
            <Image source={require('../Img/welcome_banner.png')} style={welcomeStyle.welcomeBanner} />
            <Text style={welcomeStyle.brandName}>SHOPSSY</Text>  

            <Button icon="arrow-right" mode="elevated" buttonColor='orangered' textColor='white'  labelStyle={{ fontSize: 18 }} style={welcomeStyle.btnStyle} onPress={()=>{navigation.navigate('Login')}}>
                Let's Go
            </Button>
      
        </View>
    )
}

export default Welcome
