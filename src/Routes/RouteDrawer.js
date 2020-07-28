import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import RouteBotton from './RouteBotton'

const Drawer = createDrawerNavigator();

export default function RouteDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='RouteBotton'
                component={RouteBotton}
            />
        </Drawer.Navigator>
    )
}
