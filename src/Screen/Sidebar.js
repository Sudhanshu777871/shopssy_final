import { React } from 'react'
import { View, Image, Text } from 'react-native'
import { Divider, Drawer } from 'react-native-paper';
import sideBar from '../Style/Sidebar'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Sidebar({ navigation }) {
  // function for handle Logout
  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigation.navigate('Login')
  }
  return (
    <View style={sideBar.mainView}>
      <Image source={require('../Img/avtar.png')} style={sideBar.avtar} />
      <Text style={sideBar.adminTxt}>Shivam</Text>
      <Divider style={{ width: '80%', alignSelf: 'center' }} bold={true} />



      <Drawer.Item
        style={{ marginTop: 20, width: '80%', alignSelf: 'center', color: "white" }}
        icon={require('../Img/user.png')}
        label="Profile"
        active={true}
        onPress={() => { navigation.navigate('Profile') }}
      />

      <Drawer.Item
        style={{ marginTop: 20, width: '80%', alignSelf: 'center', color: "white" }}
        icon={require('../Img/support.png')}
        label="Support"
        onPress={() => { navigation.navigate('Support') }}
      />

      <Drawer.Item
        style={{ marginTop: 20, width: '80%', alignSelf: 'center' }}
        icon='lock'
        label="Privacy & Policy"
onPress={()=>{navigation.navigate('privacy')}}
      />



      <Drawer.Item
        style={{ marginTop: 20, width: '80%', alignSelf: 'center', padding: 2 }}
        icon="logout"
        label="Logout" onPress={handleLogout}
      />

      <Text style={sideBar.footerBrand}>Powered By Shopssy</Text>
    </View>
  )
}
