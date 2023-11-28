import { React, useState } from 'react'
import { View, StatusBar, Text, ScrollView } from 'react-native'
import { TextInput, Button, Divider, Snackbar } from 'react-native-paper';
import loginStyle from '../Style/LoginStyle.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Login({ navigation }) {
    // usestate for taking input value
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    // usestae for snackbar visible
    const [snackVisible, setSnackVisible] = useState(false);
    const [errMsg, setErrMsg] = useState('');
    const handleSubmit = async () => {

        // validation for phone no

        const phoneRegex = /^[6-9]\d{9}$/;
        const valid = phoneRegex.test(phone);

        if (valid === false) {
            setIsPhoneValid(true);
            return false;

        } else {
            setIsPhoneValid(false)
        }

        // validation for password
        const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        const passwordValid = passwordRegex.test(password);

        if (passwordValid === false) {
            setIsPasswordValid(true)
            return false;

        } else {
            setIsPasswordValid(false);
            // code for calling the function
            let getAPI = 'http://192.168.100.19:5600/login';
            let callAPI = await fetch(getAPI, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ phone, password })
            })
            // converting callAPI to json
            callAPI = await callAPI.json();
            if (callAPI !== true) {
                setErrMsg(callAPI.errMsg)
                setSnackVisible(true)
            } else {
                setPhone('')
                setPassword('')
                await AsyncStorage.setItem('userPhone', phone)
                navigation.navigate('DrawerMiddle')
            }
        }
    }
    return (
        <View style={loginStyle.mainView}>
            <ScrollView>
                <StatusBar barStyle={'light-content'} backgroundColor="rgb(11,160,142)" />



                <Text style={loginStyle.brandName}> SHOPPSY</Text>

                {/* CODE FOR LOGIN COMPONENT */}
                <View style={loginStyle.loginView}>
                    <TextInput label="Phone" mode='outlined' outlineColor='black' activeOutlineColor='grey' style={loginStyle.inputStyle} keyboardType='numeric' value={phone} onChangeText={(txt) => { setPhone(txt) }} right={<TextInput.Icon icon="phone" />} />

                    {isPhoneValid && <Text style={loginStyle.errorText}>Invalid phone number & not Include +91</Text>}

                    <TextInput label="Password" mode='outlined' outlineColor='black' activeOutlineColor='grey' value={password} onChangeText={(txt) => { setPassword(txt) }} secureTextEntry style={loginStyle.inputStyle} right={<TextInput.Icon icon="eye" />} />
                    {isPasswordValid && (
                        <Text style={loginStyle.errorText}>Password must be aleast mix of 8 characters</Text>
                    )}

                    <Button icon="login" mode="contained" style={loginStyle.loginBtn} buttonColor='orangered' dark={true} elevation={10} onPress={handleSubmit} labelStyle={{ fontSize: 20 }}>
                        Login
                    </Button>
                    <Text style={loginStyle.forgetPass}>Forget Password</Text>
                    {/* CODE FOR NEW ACCOUNT */}
                    <Divider horizontalInset={true} bold={true} style={loginStyle.divider} />
                    <Text style={loginStyle.newAccount}>New User</Text>

                    <Button icon="account" mode="elevated" style={loginStyle.loginBtn} elevation={10} textColor='orangered' onPress={() => { navigation.navigate('Account') }} labelStyle={{ fontSize: 20 }}>
                        Create Account
                    </Button>
                </View>
            </ScrollView>
            {/* code for snackView */}
            <Snackbar
                visible={snackVisible}
                onDismiss={() => { setSnackVisible(false) }}
                style={{ backgroundColor: "red" }}
                action={{
                    label: 'OK',
                    labelStyle: { color: "white", backgroundColor: 'grey', paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, elevation: 5, borderRadius: 10 },
                    onPress: () => {
                        // Do something
                    },
                }}>
                {errMsg}
            </Snackbar>
        </View>
    )
}

export default Login
