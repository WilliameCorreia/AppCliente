import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import RouteDashBoard from './RouteDashBoard';
import MyTabButtom from '../componentes/MyTabButtom';

const Tab = createBottomTabNavigator();

export default function RouteBotton() {
    return (
        <Tab.Navigator
            initialRouteName={'RouteDashBoard'}
            tabBarOptions={{
                activeTintColor: 'black',
                inactiveTintColor: 'red',
                tabStyle: { backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
                showLabel: true,
            }}
            tabBar={props => <MyTabButtom {...props}/> }
        >
            <Tab.Screen
                name='Inicio'
                component={RouteDashBoard}
            />
        </Tab.Navigator>
    )
}


