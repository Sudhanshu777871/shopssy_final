import React from 'react'
import { View, Text} from 'react-native'
import { TextInput, Button} from 'react-native-paper';
import setBill from '../Style/SetBill'
setBill
function SetBill() {
  return (
    <View style={setBill.mainView}>

      <Text style={setBill.brandTxt}>Set Bill Amount</Text>
      <TextInput label="Amount" mode='outlined' cursorColor="rgb(4, 66, 59)" activeOutlineColor='rgb(4, 66, 59)' outlineColor="black" textColor={"black"} style={{width:'80%', alignSelf:'center',marginTop:'30%'}}/>

      {/* CODE FOR BUTTON */}
      <Button icon="send" mode="contained" style={setBill.setDiscountBtn}>
        Set Limit
      </Button>

    </View>
  )
}

export default SetBill
