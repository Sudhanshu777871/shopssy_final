import { React, useState } from 'react'
import { View, StatusBar, Text, ScrollView } from 'react-native'
import { TextInput, Button, Divider, Snackbar } from 'react-native-paper';
import accountStyle from '../Style/Account.js'
import AsyncStorage from '@react-native-async-storage/async-storage';

function Account({ navigation }) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    // usestate for checking the validation
    const [isNameValid, setIsNameValid] = useState(false);
    const [isPhoneValid, setIsPhoneValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    // usestae for snackbar visible
    const [snackVisible, setSnackVisible] = useState(false);
    const [errAPIMsg, setAPIErrMsg] = useState('');
    // function for handleSubmit form
    const handleSubmit = async () => {

        // validation for name
        if (name == "") {
            setIsNameValid(true)
            return false;

        } else {
            setIsNameValid(false)
        }
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
            let getAPI = 'http://192.168.100.19:5600/signup';
            let callAPI = await fetch(getAPI, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, password })
            })
            // converting callAPI to json
            callAPI = await callAPI.json();
            if (callAPI !== true) {
                setAPIErrMsg(callAPI.errMsg);
                setSnackVisible(true)
            } else {
                await AsyncStorage.setItem('userPhone', phone)
                navigation.navigate('DrawerMiddle')
            }
        }
    }
    return (
        <View style={accountStyle.mainView}>
            <ScrollView>
                <StatusBar barStyle={'light-content'} backgroundColor="rgb(11,160,142)" />
                <Text style={accountStyle.brandName}>SHOPPSY</Text>

                {/* CODE FOR LOGIN COMPONENT */}
                <View style={accountStyle.loginView}>

                    <TextInput label="Name" mode='outlined' outlineColor='black' activeOutlineColor='grey' value={name}
                        onChangeText={(txt) => { typeof txt === 'string' ? setName(txt) : '' }} style={accountStyle.inputStyle} right={<TextInput.Icon icon="account" />} />
                    {isNameValid && <Text style={accountStyle.errorText}>Name is required</Text>}



                    <TextInput label="Phone" mode='outlined' outlineColor='black' activeOutlineColor='grey' style={accountStyle.inputStyle} value={phone} keyboardType="numeric"
                        onChangeText={(txt) => { setPhone(txt) }} right={<TextInput.Icon icon="phone" />} />
                    {isPhoneValid && <Text style={accountStyle.errorText}>Invalid phone number & not Include +91</Text>}


                    <TextInput label="Password" mode='outlined' outlineColor='black' activeOutlineColor='grey' value={password}
                        onChangeText={(txt) => { setPassword(txt) }} secureTextEntry style={accountStyle.inputStyle} right={<TextInput.Icon icon="eye" />} />

                    {isPasswordValid && (
                        <Text style={accountStyle.errorText}>Password must be aleast mix of 8 characters</Text>
                    )}


                    <Button mode="contained" style={accountStyle.loginBtn} buttonColor='orangered' dark={true} elevation={10} onPress={handleSubmit} labelStyle={{ fontSize: 20 }}>
                        Create
                    </Button>

                    {/* navigation.navigate('DrawerMiddle')  */}

                    {/* CODE FOR NEW ACCOUNT */}
                    <Divider horizontalInset={true} bold={true} style={accountStyle.divider} />
                    <Text style={accountStyle.newAccount}>Already Account </Text>

                    <Button icon="login" mode="elevated" style={accountStyle.loginBtn} elevation={10} textColor='orangered' onPress={() => { navigation.navigate('Login') }} labelStyle={{ fontSize: 20 }}>
                        Login Account
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
               {errAPIMsg}
            </Snackbar>
        </View>
    )
}

export default Account;
