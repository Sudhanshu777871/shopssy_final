import { React } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { IconButton, Text } from 'react-native-paper';
import Home from './Home';
import History from './History';

import Product from './Product';

export default function Main() {
  const BottomNavigator = createBottomTabNavigator();

  return (


    <BottomNavigator.Navigator>
      <BottomNavigator.Screen name="Home" component={Home} options={{
        headerShown: false, tabBarLabel: ({focused,color}) => (
          <Text style={{ color}}>
            Home
          </Text>
        ), tabBarIcon: ({color}) => (
          <IconButton

            icon="home"
            iconColor={color}
            size={30}

          />
        ),
      }} />



      <BottomNavigator.Screen name="Product" component={Product} options={{
        headerShown: false, tabBarLabel: '', tabBarIcon: ({color}) => (
          <IconButton
            icon={require('../Img/scan.png')}
            mode='contained'
            containerColor= "rgb(4, 66, 59)"
            style={{ borderWidth: 2, borderColor: "white", padding: 5 }}
            iconColor={"white"}
            size={42}

          />
        ),
      }} />


      <BottomNavigator.Screen name="History" component={History} options={{
        headerShown: false, tabBarLabel: ({focused,color }) => (
          <Text style={{ color }}>
            History
          </Text>
        ), tabBarIcon: ({color}) => (
          <IconButton
            icon="history"

            iconColor={color}
            size={30}

          />
        ),
      }} />
    </BottomNavigator.Navigator>

  );
}
