import { React, useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { Button, Snackbar } from 'react-native-paper'
import supportStyle from '../Style/Support'
import LottieView from 'lottie-react-native';
import supportAnimation from '../lottify/support.json';
import AsyncStorage from '@react-native-async-storage/async-storage';

function Support() {
  // code for texInput
  const [textAreaInput, setTextAreaInput] = useState('');
  const [errorMsg, setErrorMsg] = useState(false);

  const [submitMsg, setSubmitMsg] = useState('');
  const [snackVisible, setSnackVisible] = useState(false);
  // code for submitting the textAreaForm
  const handleSupport = async () => {
    const phoneNo = await AsyncStorage.getItem('userPhone');
    if (textAreaInput === '' || textAreaInput.length <= 2) {
      setErrorMsg(true)
    } else {
      setErrorMsg(false)
      let getAPI = await fetch('http://192.168.100.19:5600/support', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ msg: textAreaInput, phone: phoneNo })
      })
      // code for checking the getAPI result
      getAPI = await getAPI.json();
      if (getAPI === true) {
        setSubmitMsg("Message Sent, We Get ASAP")
        setTextAreaInput('')
        setSnackVisible(true)

      } else {
        setSubmitMsg("Message Failed, Try Again")
      }
    }
  }
  return (


    <KeyboardAvoidingView style={{ flex: 1 }}>
     
      <View style={supportStyle.mainView}>
      
        <Text style={supportStyle.mainSupportHead}>Support</Text>
        <LottieView
          source={supportAnimation}
          autoPlay
          loop
          style={supportStyle.imageSupport}
        />

        <Text style={supportStyle.subHeadTxt}>Fell Free To Connect Us</Text>
        <TextInput style={supportStyle.textAreaStyle} placeholder='Enter Message...' multiline={true} numberOfLines={4} value={textAreaInput} onChangeText={(txt) => { setTextAreaInput(txt) }} />

        {errorMsg && <Text style={{ color: "red", fontWeight: "600", marginTop: 8, textAlign: 'center', fontSize: 15 }}>Please Enter Message</Text>}

        <Button icon="send" mode="elevated" elevation={10} textColor='white' labelStyle={{ fontSize: 20 }} style={supportStyle.sendBtn} onPress={handleSupport}>
          Send
        </Button>
        {/* code for snackView */}
        <Snackbar
          visible={snackVisible}
          onDismiss={() => { setSnackVisible(false) }}
          style={{ backgroundColor: "grey" }}
          action={{
            label: 'OK',
            labelStyle: { color: "white", backgroundColor: "grey", paddingLeft: 10, paddingRight: 10, paddingTop: 5, paddingBottom: 5, borderRadius: 10, elevation: 5 },
            onPress: () => {
              // Do something
            },
          }}>
          {submitMsg}
        </Snackbar>
      </View>
    </KeyboardAvoidingView>

  )
}

export default Support
