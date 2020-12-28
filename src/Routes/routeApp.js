/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

import Estabelecimentos from '../pages/Estabelecimentos/Estabelecimentos';
import ListaEstabelecimentos from '../pages/ListaEstabelecimentos/ListaEstabelecimentos';
import MyHeader from '../componentes/MyHeader';
import MenuButton from '../componentes/MenuButton';
import MybackButton from '../componentes/MybackButton';
import RouteButton from '../Routes/RouteBotton';
import PerfilUsuario from '../pages/PerfilUsuario/PerfilUsuario';
import CadastroNome from '../pages/Cadastro/CadastroNome/CadastroNome';
import CadastroEmail from '../pages/Cadastro/CadastroEmail/CadastroEmail';
import CadastroConfEmail from '../pages/Cadastro/CadastroConfEmail/CadastroConfEmail';
import CadastroSenha from '../pages/Cadastro/CadastroSenha/CadastroSenha';
import CadastroConfSenha from '../pages/Cadastro/CadastroConfSenha/CadastroConfSenha';
import CadastroEndereco from '../pages/Cadastro/CadastroEndereco/CadastroEndereco';

const Stack = createStackNavigator();

function RouteApp({ route }) {
  return (
    <Stack.Navigator
      initialRouteName={'CadastroEndereco'}
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
      <Stack.Screen
        name="CadastroNome"
        component={CadastroNome}
        options={{ headerStyle: { backgroundColor: '#B32728' }, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
      />
      <Stack.Screen
        name="CadastroEmail"
        component={CadastroEmail}
        options={{ headerStyle: { backgroundColor: '#B32728' }, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
      />
      <Stack.Screen
        name="CadastroConfEmail"
        component={CadastroConfEmail}
        options={{ headerStyle: { backgroundColor: '#B32728' }, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
      />
      <Stack.Screen
        name="CadastroSenha"
        component={CadastroSenha}
        options={{ headerStyle: { backgroundColor: '#B32728' }, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
      />
      <Stack.Screen
        name="CadastroConfSenha"
        component={CadastroConfSenha}
        options={{ headerStyle: { backgroundColor: '#B32728' }, headerShown: false, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
      />
      <Stack.Screen
        name="CadastroEndereco"
        component={CadastroEndereco}
        options={{ headerStyle: { backgroundColor: '#B32728' }, cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }}
      />
    </Stack.Navigator>
  );
}

export default RouteApp;
