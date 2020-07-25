import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Estabelecimentos from '../pages/Estabelecimentos/Estabelecimentos'
import ListaEstabelecimentos from '../pages/ListaEstabelecimentos/ListaEstabelecimentos'

const Stack = createStackNavigator();

function RouteApp() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Estabelecimentos'
                component={Estabelecimentos}
            />
            <Stack.Screen
                name='ListaEstabelecimentos'
                component={ListaEstabelecimentos}
            />
        </Stack.Navigator>
    )
}

export default RouteApp