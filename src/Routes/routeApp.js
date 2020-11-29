/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Estabelecimentos from '../pages/Estabelecimentos/Estabelecimentos';
import ListaEstabelecimentos from '../pages/ListaEstabelecimentos/ListaEstabelecimentos';
import MyHeader from '../componentes/MyHeader';
import MenuButton from '../componentes/MenuButton';
import MybackButton from '../componentes/MybackButton';
import RouteButton from '../Routes/RouteBotton';
import PerfilUsuario from '../pages/PerfilUsuario/PerfilUsuario';
import RouteDashBoard from '../Routes/RouteDashBoard';

const Stack = createStackNavigator();

function RouteApp({ route }) {
  return (
    <Stack.Navigator
      initialRouteName={'Estabelecimentos'}
      headerMode={'screen'}
      screenOptions={{
        header: ({ scene, navigation }) => {
          const { options } = scene.descriptor;
          const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
          const backColor = options.headerStyle.backgroundColor;

          switch (title) {
            case "Tipo de Estabelecimentos":
              return (
                <MyHeader
                  title={title}
                  color={backColor}
                />
              )
              break;
              case "Lista de Estabelecimentos":
                return (
                  <MyHeader
                    title={title}
                    color={backColor}
                    rightButton={title === 'Estabelecimentos' ? null : (<MybackButton onPress={() => navigation.goBack()} />)}
                  />
                )
                break; 
            default:
              break;
          }
        },
      }}>

      <Stack.Screen
        name="Estabelecimentos"
        component={Estabelecimentos}
        options={{ headerStyle: { backgroundColor: '#B32728' }, title: "Tipo de Estabelecimentos" }}
      />
      <Stack.Screen
        name="PerfilUsuario"
        component={PerfilUsuario}
        options={{ headerStyle: { backgroundColor: '#B32728' } }}
      />
      <Stack.Screen
        name="ListaEstabelecimentos"
        component={ListaEstabelecimentos}
        options={{ headerStyle: { backgroundColor: '#B32728' }, title: "Lista de Estabelecimentos" }}
      />
      <Stack.Screen
        name="RouteButton"
        component={RouteButton}
        options={{ headerStyle: { backgroundColor: '#B32728' }, title: "Estabelecimento" , headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default RouteApp;
