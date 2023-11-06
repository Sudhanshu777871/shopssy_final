import { React, useState, useEffect } from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import profileStyle from '../Style/Profile'
import { TextInput, Button, Snackbar, Appbar } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage'

function Profile({ navigation }) {
  // usestate for set Phone
  const [userPhoneNo, setUserPhoneNo] = useState('');
  const [userName, setUserName] = useState('');
  // usestate for current password and new password
  const [curentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  // usestate for showing the error
  const [isValidCurrentPasswor, setIsValidCurrentPassword] = useState(false)
  const [isNewPasswordValid, setIsNewPasswordValid] = useState(false)
  // usestae for snackbar visible
  const [snackVisible, setSnackVisible] = useState(false);
  // usestae for snackview message
  const [snackMsg, setSnackMsg] = useState('');
  const getPhone = async () => {
    let getPhone = await AsyncStorage.getItem('userPhone');
    setUserPhoneNo(getPhone);
    let getAPI = await fetch('http://10.0.2.2:5600/profile', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone: getPhone })
    })

    // checking the result
    getAPI = await getAPI.json();

    if (getAPI[0].Name) {
      setUserName(getAPI[0].Name)
    }
    else {
      setUserName("Unknown")
    }
  }
  // function for handle password
  const handlePasswordChange = async () => {

    // validation for current password
    const currentPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    const passwordValid = currentPasswordRegex.test(curentPassword);
    if (passwordValid === false) {
      setIsValidCurrentPassword(true)
      return false;
    }
    else {
      setIsValidCurrentPassword(false)
      // validation for new password
      const newPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
      const newPasswordValid = newPasswordRegex.test(newPassword);
      if (newPasswordValid === false) {
        setIsNewPasswordValid(true)
        return false;
      }
      else {
        setIsNewPasswordValid(false)
        let getAPIPass = await fetch('http://10.0.2.2:5600/update_password', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ currentPass: curentPassword, newPass: newPassword, phone: userPhoneNo })
        })
        // checking the result
        getAPIPass = await getAPIPass.json();
        if (getAPIPass==true) {
          // setting the message
          setSnackMsg("Password Updated Successfully")
          setCurrentPassword('')
          setNewPassword('')
          setSnackVisible(true)
          navigateToLogin()
        }
        else{
          setSnackMsg(getAPIPass.message)
          setSnackVisible(true)
        }

      }

    }
  }
  // call useeffect
  useEffect(() => {
    getPhone();

  }, [])

  // function to navigate to login page
  const navigateToLogin=()=>{
   setTimeout(() => {
    navigation.navigate('Login');
   }, 1500); 
  }
  return (
    <View style={profileStyle.mainView}>
      <Appbar.Header style={{ backgroundColor: "rgb(4, 66, 59)" }}>
        <Appbar.BackAction onPress={() => { navigation.goBack() }} style={{ backgroundColor: "orangered" }} color='white' />
      </Appbar.Header>
      <ScrollView>
        <Text style={profileStyle.brandTxt}>Shopssy</Text>
        <Image source={require('../Img/avtar.png')} style={profileStyle.avtarStyle} />

        <View style={profileStyle.profileDetailsView}>
          <Text style={profileStyle.detailsTyleTxt}>{userName}</Text>
          <Text style={profileStyle.detailsTyleTxt}>{userPhoneNo}</Text>
        </View>

        {/* VIEW FOR CHANGE PASSWORD */}
        <View style={{ paddingRight: 20, paddingLeft: 20, marginTop: 30 }}>
          <Text style={profileStyle.changePassHead}>Change Password</Text>

          {/* CODE FOR CHNAGE PASSWORD INPUT */}
          <TextInput label="Current Password" mode='outlined' outlineColor='black' activeOutlineColor='black' secureTextEntry right={<TextInput.Icon icon="eye" />} style={profileStyle.inputTextStyleWidth} value={curentPassword} onChangeText={(txt) => { setCurrentPassword(txt) }} />
          {isValidCurrentPasswor && (
            <Text style={profileStyle.errorText}>Password must be atleast mix of 8 characters</Text>
          )}
          <TextInput label="New Password" mode='outlined' outlineColor='black' activeOutlineColor='black' secureTextEntry right={<TextInput.Icon icon="lock" />} style={profileStyle.inputTextStyleWidth} value={newPassword} onChangeText={(txt) => { setNewPassword(txt) }} />
          {isNewPasswordValid && (
            <Text style={profileStyle.errorText}>Password must be atleast mix of 8 characters</Text>
          )}

          <Button icon="send" mode="elevated" elevation={10} textColor='white' labelStyle={{ fontSize: 20 }} style={profileStyle.changePassBtn} onPress={handlePasswordChange} >
            Change Password
          </Button>
        </View>
      </ScrollView>
      {/* code for snackView */}
      <Snackbar
        visible={snackVisible}
        onDismiss={() => { setSnackVisible(false) }}
        style={{ backgroundColor: "grey" }}
        action={{
          label: 'OK',
          labelStyle: { color: "white", backgroundColor: 'grey', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, elevation: 5, borderRadius: 10 },
          onPress: () => {
            // Do something
          },
        }}>
        {snackMsg}
      </Snackbar>
    </View>
  )
}

export default Profile
