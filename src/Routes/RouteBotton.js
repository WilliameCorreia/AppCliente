import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RouteDashBoard from './RouteDashBoard'

const Tab = createBottomTabNavigator(); 


export default function RouteBotton() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='RouteDashBoard'
                component={RouteDashBoard}
            />
        </Tab.Navigator>
    )
}


