/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RouteApp from './routeApp';

const Drawer = createDrawerNavigator();

export default function RouteDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="RouteApp" component={RouteApp} />
    </Drawer.Navigator>
  );
}
