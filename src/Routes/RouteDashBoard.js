import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Estabelecimentos from '../pages/Estabelecimentos/Estabelecimentos'
import MyHeader from '../componentes/MyHeader'
import MenuButton from '../componentes/MenuButton'
import MybackButton from '../componentes/MybackButton'
import { DrawerActions } from '@react-navigation/native'
import RouteBotton from '../Routes/RouteBotton'
import DashBoard from '../pages/DashBoard.js/Dashboard'

const Stack = createStackNavigator();

function RouteDashBoard() {
    return (
        <Stack.Navigator
            initialRouteName={'Estabelecimentos'}
            headerMode={'screen'}
            screenOptions={{
                header:({ scene, navigation }) =>{
                    const { options } = scene.descriptor;
                    const title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
                    const backColor = options.headerStyle.backgroundColor

                    return(
                        <MyHeader
                            color={backColor}
                            leftButton={<MenuButton onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>}
                            rightButton={ title == 'Estabelecimentos' ? null : <MybackButton onPress={() => navigation.goBack()}/>}
                        />
                    )
                }
            }}
        >
            <Stack.Screen
                name='DashBoard'
                component={DashBoard}
                options={{ headerStyle:{ backgroundColor: '#B32728' } }}
            />
            
        </Stack.Navigator>
    )
}

export default RouteDashBoard