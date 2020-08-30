import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RouteDashBoard from './RouteDashBoard'
import ListaEstabelecimentos from '../pages/ListaEstabelecimentos/ListaEstabelecimentos'
import Carrinho from '../pages/Carrinho/Carrinho'
import PerfilUsuario from '../pages/PerfilUsuario/PerfilUsuario'


const Tab = createBottomTabNavigator();

export default function RouteBotton({ route }) {
    console.log(route);
    return (
        <Tab.Navigator
            initialRouteName={'RouteDashBoard'}
            tabBarOptions={{
                tabStyle: { backgroundColor: '#B32728', justifyContent: 'center', alignItems: 'center' },
                showLabel: false,
            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {

                    switch (route.name) {
                        case 'Inicio': return <Image source={require('../Assets/images/home.png')}
                            style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 30, tintColor: color }} />
                            break;
                        case 'Estabelecimentos': return <Image source={require('../Assets/images/estabelecimento.png')}
                            style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 30, tintColor: color }} />
                            break;
                        case 'Carrinho': return <Image source={require('../Assets/images/carrinho.png')}
                            style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 30, tintColor: color }} />
                            break;
                        case 'Perfil': return <Image source={require('../Assets/images/user.png')}
                            style={{ width: 40, height: 40, backgroundColor: '#fff', borderRadius: 30, tintColor: color }} />
                            break;
                    }
                }
            })}
        >
            <Tab.Screen
                name='Inicio'
                component={RouteDashBoard}
                initialParams={route.params}
            />
            <Tab.Screen
                name='Estabelecimentos'
                component={ListaEstabelecimentos}
            />
            <Tab.Screen
                name='Carrinho'
                component={Carrinho}
            />
            <Tab.Screen
                name='Perfil'
                component={PerfilUsuario}
            />
        </Tab.Navigator>
    )
}


