/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Estabelecimentos from '../pages/Estabelecimentos/Estabelecimentos';
import ListaEstabelecimentos from '../pages/ListaEstabelecimentos/ListaEstabelecimentos';
import Carrinho from '../pages/Carrinho/Carrinho';
import DescricaoProduto from '../pages/DescricaoProduto/DescricaoProduto';
import MyHeader from '../componentes/MyHeader';
import MenuButton from '../componentes/MenuButton';
import MybackButton from '../componentes/MybackButton';
import { DrawerActions } from '@react-navigation/native';
import RouteButton from '../Routes/RouteBotton';

const Stack = createStackNavigator();

function RouteApp() {
  return (
    <Stack.Navigator
      initialRouteName={'DescricaoProduto'}
      // initialRouteName={'Estabelecimentos'}
      headerMode={'screen'}
      screenOptions={{
        header: ({ scene, navigation }) => {
          const { options } = scene.descriptor;
          const title =
            options.headerTitle !== undefined
              ? options.headerTitle
              : options.title !== undefined
                ? options.title
                : scene.route.name;
          const backColor = options.headerStyle.backgroundColor;

          return (
            <MyHeader
              color={backColor}
              leftButton={
                <MenuButton
                  onPress={() =>
                    navigation.dispatch(DrawerActions.toggleDrawer())
                  }
                />
              }
              rightButton={
                title === 'Estabelecimentos' ? null : (
                  <MybackButton onPress={() => navigation.goBack()} />
                )
              }
            />
          );
        },
      }}>
      <Stack.Screen
        name="Estabelecimentos"
        component={Estabelecimentos}
        options={{ headerStyle: { backgroundColor: '#B32728' } }}
      />
      <Stack.Screen
        name="ListaEstabelecimentos"
        component={ListaEstabelecimentos}
        options={{ headerStyle: { backgroundColor: '#B32728' } }}
      />
      <Stack.Screen
        name="Carrinho"
        component={Carrinho}
        options={{
          title: 'PLANETA ENTREGAS',
          headerStyle: { backgroundColor: '#B32728' }
        }}
      />
      <Stack.Screen
        name="DescricaoProduto"
        component={DescricaoProduto}
        options={{
          title: 'PLANETA ENTREGAS',
          headerStyle: { backgroundColor: '#B32728' }
        }}
      />
      <Stack.Screen
        name="RouteButton"
        component={RouteButton}
        options={{ headerStyle: { backgroundColor: '#B32728' } }}
      />
    </Stack.Navigator>
  );
}

export default RouteApp;
