import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import Sidebar from './Sidebar';
import Main from './Main';


function DrawerMiddle() {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator drawerContent={props => <Sidebar {...props} />}>
            <Drawer.Screen
                name="Main"
                component={Main}
                options={{ headerShown: false }}
            />

        </Drawer.Navigator>
    )
}

export default DrawerMiddle
