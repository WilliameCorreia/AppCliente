import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import routeApp from './routeApp'

const Tab = createBottomTabNavigator(); 


export default function RouteBotton() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name='routeApp'
                component={routeApp}
            />
        </Tab.Navigator>
    )
}


