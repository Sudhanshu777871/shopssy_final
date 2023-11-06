import React from 'react'
import { View, Text, FlatList } from 'react-native'
import historyStyle from '../Style/History'
import { FAB, Appbar } from 'react-native-paper'

function History({navigation}) {

  // code for demo data
  const demoData = [
    {
      itemPrice: 900,
      date: '23/05/23'
    },
    {
      itemPrice: 1500,
      date: '24/05/23'
    },
    {
      itemPrice: 2000,
      date: '28/05/23'
    },
    {
      itemPrice: 300,
      date: '30/05/23'
    },
    {
      itemPrice: 900,
      date: '23/05/23'
    },
    {
      itemPrice: 1500,
      date: '24/05/23'
    },
    {
      itemPrice: 2000,
      date: '28/05/23'
    },
    {
      itemPrice: 300,
      date: '30/05/23'
    },
    {
      itemPrice: 900,
      date: '23/05/23'
    },
    {
      itemPrice: 1500,
      date: '24/05/23'
    },
    {
      itemPrice: 2000,
      date: '28/05/23'
    },
    {
      itemPrice: 300,
      date: '30/05/23'
    },
    {
      itemPrice: 900,
      date: '23/05/23'
    },
    {
      itemPrice: 1500,
      date: '24/05/23'
    },
    {
      itemPrice: 2000,
      date: '28/05/23'
    },
    {
      itemPrice: 300,
      date: '30/05/23'
    }

  ]

  return (
    <View style={historyStyle.mainView}>
      <Appbar.Header style={{ backgroundColor: "orangered" }}>
        <Appbar.BackAction onPress={() => { navigation.goBack() }} style={{ backgroundColor: "rgb(4, 66, 59)" }} color='white' />
        <Appbar.Content title="History" style={historyStyle.mainHistory} color='white'/>
      </Appbar.Header>
      {/* code for FAB */}
      <FAB icon="download" style={historyStyle.fab} color='white' />

      {/* CODE FOR SHOWING ALL THE HISTORY */}

      <FlatList
        data={demoData}
        renderItem={({ item }) => (
          <View style={historyStyle.flatListStyle}>
            <Text style={{ fontWeight: "bold" }}>INR {item.itemPrice}</Text>
            <Text style={{ fontWeight: "bold" }}>{item.date}</Text>
          </View>
        )}
      />

    </View>
  )
}

export default History
