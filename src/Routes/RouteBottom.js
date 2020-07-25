import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RouteDrawer from './RouteDrawer'

const Tab = createBottomTabNavigator(); 


export default function RouteBottom() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='RouteDrawer'
                component={RouteDrawer}
            />
        </Tab.Navigator>
    )
}


