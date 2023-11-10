import { React, useEffect, useState } from 'react'
import { View, TextInput } from 'react-native'
import { Appbar, Badge, Text, Chip, Button } from 'react-native-paper'
import AsyncStorage from '@react-native-async-storage/async-storage';
import myStyleCart from '../Style/Productcss';

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
    <View style={myStyleCart.mainView}>
      <Appbar.Header style={myStyleCart.bgCommon}>
        <Appbar.Content title="" />
        <View style={{ marginRight: 10 }}>
          <Appbar.Action icon="cart" style={myStyleCart.cartStyle} color='white' />
          <Badge style={myStyleCart.cartBadgeNotify} size={22}>3</Badge>
        </View>
      </Appbar.Header>

      {/* CODE FOR ADDING THE PRODUCTS DETAILS */}
      <View style={{ flex: 1, flexDirection: 'column', width: '90%', alignSelf: 'center' }}>
        <Text variant="titleLarge" style={{ color: "white", fontWeight: "bold", elevation: 5, marginBottom: 5 }}>Product Description</Text>
        <TextInput placeholder='Enter Price' style={myStyleCart.priceInput} />
        <TextInput placeholder='Enter Product Name' style={myStyleCart.priceInput} />
        <TextInput placeholder='Enter Discount' style={myStyleCart.priceInput} />
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
          <Chip>10%</Chip>
          <Chip>20%</Chip>
          <Chip>30%</Chip>
          <Chip>40%</Chip>
          <Chip>50%</Chip>
        </View>

        <TextInput placeholder='Enter Quantity' style={myStyleCart.priceInput} />
        <View style={{ flexDirection: 'row', justifyContent: "space-between", marginTop: 10 }}>
          <Chip>gms</Chip>
          <Chip>kgs</Chip>
          <Chip>litres</Chip>
          <Chip>pieces</Chip>
        </View>

        {/* code for total price */}
        <Text variant="titleLarge" style={{ alignSelf: 'center', marginTop: 40, marginBottom: 10, backgroundColor: "white", paddingTop: 5, paddingBottom: 5, paddingLeft: 10, paddingRight: 10, color: "black", borderRadius: 5, elevation: 5 }}>Total Price : 9000</Text>

        {/* code for button */}
        <View style={{ flexDirection: 'row', justifyContent: "space-around", marginTop: 30 }}>
          <Button icon="cart" mode="contained" onPress={() => console.log('Pressed')} style={{ borderRadius: 2, backgroundColor: 'green',width:'45%' }}>
            Add To Cart
          </Button>

          <Button icon={require('../Img/cross.png')} mode="outlined" color='red' onPress={() => console.log('Pressed')} style={{ borderRadius: 2, backgroundColor: "white", width:'45%'  }} dark={true} >
            Cancel
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Product
