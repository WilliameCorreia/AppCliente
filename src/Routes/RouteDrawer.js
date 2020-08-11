/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import RouteApp from './routeApp';

import DrawerContent from '../componentes/DrawerContent'

const Drawer = createDrawerNavigator();

export default function RouteDrawer() {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: '#F23132'}}
      drawerContent={({navigator}) => <DrawerContent/>}
    >
      <Drawer.Screen name="RouteApp" component={RouteApp} />
    </Drawer.Navigator>
  );
}
