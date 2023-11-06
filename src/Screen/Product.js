import { React, useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
function Product() {
  const [budget, setBudget] = useState('');
  const [coupon, setCoupon] = useState('');

  // function for show details
  const showDetails = async () => {
    let x = await AsyncStorage.getItem("budget");
    let y = await AsyncStorage.getItem("couponCode");
    setBudget(x)
    setCoupon(y)
  }
  
  useEffect(() => {
    showDetails();
  }, [])
  return (
    <View style={{ flex: 1, backgroundColor: "orangered", justifyContent: 'center', alignContent: 'center' }}>
      <Text style={{ textAlign: 'center', color: "white", fontSize: 40, fontWeight: "bold" }}>Budget : {budget} </Text>

      <Text style={{ textAlign: 'center', color: "white", fontSize: 40, fontWeight: "bold" }}>Coupon : {coupon} </Text>
    </View>
  )
}

export default Product
