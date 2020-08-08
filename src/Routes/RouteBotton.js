import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import RouteDashBoard from './RouteDashBoard'
import ListaEstabelecimentos from '../pages/ListaEstabelecimentos/ListaEstabelecimentos'

const Tab = createBottomTabNavigator(); 


export default function RouteBotton() {
    return (
        <Tab.Navigator
            screenOptions={({route}) => ({
                tabBarIcon:({color, size}) =>{

                    switch(route.name){
                        case 'Inicio' : return <Image source={require('../Assets/images/home.png')}
                                                    style={{width: size, height: size, borderRadius: 10, tintColor: color}}
                                                />
                        break;
                       /*  case 'Busca' : return <Image source={require('../assets/images/estabelecimentos.png')}
                                                    style={{width: size, height: size, borderRadius: 10, tintColor: color}}
                                                />
                        break;
                        case 'Perfil' : return <Image source={require('../assets/images/carrinho.png')}
                                                    style={{width: size, height: size, borderRadius: 10, tintColor: color}}
                                                /> */
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
            {/* <Tab.Screen
                name='Inicio'
                component={RouteDashBoard}
            />
            <Tab.Screen
                name='Inicio'
                component={RouteDashBoard}
            /> */}
        </Tab.Navigator>
    )
}


