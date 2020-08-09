import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RouteDashBoard from './RouteDashBoard'
import ListaEstabelecimentos from '../pages/ListaEstabelecimentos/ListaEstabelecimentos'
import CarrinhoCompras from '../pages/CarrinhoCompras/CarrinhoCompras'
import PerfilUsuario from '../pages/PerfilUsuario/PerfilUsuario'

const Tab = createBottomTabNavigator();

export default function RouteBotton() {
    return (
        <Tab.Navigator
            initialRouteName={'RouteDashBoard'}
            tabBarOptions={{
                tabStyle: { backgroundColor: '#B32728' },
                showLabel: false,

            }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {

                    switch (route.name) {
                        case 'Inicio': return <Image source={require('../Assets/images/home.png')}
                            style={{ width: 40, height: 40 }} />
                            break;
                        case 'Estabelecimentos': return <Image source={require('../Assets/images/estabelecimentos.png')}
                            style={{ width: 40, height: 40 }} />
                            break;
                        case 'Carrinho': return <Image source={require('../Assets/images/carrinho.png')}
                            style={{ width: 40, height: 40 }} />
                            break;
                        case 'Perfil': return <Image source={require('../Assets/images/perfil.png')}
                            style={{ width: 40, height: 40 }} />
                            break;
                    }
                }
            })}
        >
            <Tab.Screen
                name='Inicio'
                component={RouteDashBoard}
            />
            <Tab.Screen
                name='Estabelecimentos'
                component={ListaEstabelecimentos}
            />
            <Tab.Screen
                name='Carrinho'
                component={CarrinhoCompras}
            />
            <Tab.Screen
                name='Perfil'
                component={PerfilUsuario}
            />
        </Tab.Navigator>
    )
}


