import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Splash from './Screen/Splash'
import Welcome from './Screen/Welcome'
import Login from './Screen/Login'
import Account from './Screen/Account'
import DrawerMiddle from './Screen/DrawerMiddle'
import History from './Screen/History'
import Support from './Screen/Support'
import Profile from './Screen/Profile'
import Privacy from './Screen/Privacy'

function AppNavigator() {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* SCREEN FOR LOGIN */}
                <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
                {/* SCREEN FOR WELCOME */}
                <Stack.Screen name='Welcome' component={Welcome} options={{ headerShown: false }} />

                {/* SCREEN FOR SUPPORT */}
                <Stack.Screen name='Support' component={Support} options={{ headerShown: false }} />
                {/* SCREEN FOR LOGIN */}
                <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
                {/* SCREEN FOR ACCOUNT */}
                <Stack.Screen name='Account' component={Account} options={{ headerShown: false }} />

                {/* SCREEN FOR ACCOUNT */}
                <Stack.Screen name='Profile' component={Profile} options={{ headerShown: false }} />


                {/* SCREEN FOR DRAWER MIDDLE */}
                <Stack.Screen name='DrawerMiddle' component={DrawerMiddle} options={{ headerShown: false }} />

                <Stack.Screen name='history' component={History} options={{ headerShown: false }} />

                <Stack.Screen name='privacy' component={Privacy} options={{ headerShown: false }} />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator
