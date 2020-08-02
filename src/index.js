/* eslint-disable prettier/prettier */
import React from 'react';

import Routes from './Routes/index';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';

const index = () => {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content"
        translucent={true}
      />
      <Routes />
    </NavigationContainer>
  );
};

export default index;
