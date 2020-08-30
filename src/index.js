/* eslint-disable prettier/prettier */
import React from 'react';

import Routes from './Routes/index';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import { AuthProvider } from './Contexts/auth'

const index = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor={'#fff'} barStyle="dark-content" translucent={true} />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default index;
