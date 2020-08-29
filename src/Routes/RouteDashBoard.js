import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import MyHeader from '../componentes/MyHeader'
import MenuButton from '../componentes/MenuButton'
import MybackButton from '../componentes/MybackButton'
import { DrawerActions } from '@react-navigation/native'
import DashBoard from '../pages/DashBoard.js/Dashboard'
import Pagamento from '../pages/Pagamento/Pagamento'
import Categorias from '../pages/Categorias/Categorias'
import Descricao from '../pages/DescricaoProduto/DescricaoProduto'

const Stack = createStackNavigator();

function RouteDashBoard({ route }) {
    return (
        <Stack.Navigator
            initialRouteName={'DashBoard'}
            headerMode={'screen'}
        /* screenOptions={{
            header:({ scene, navigation }) =>{
                const { options } = scene.descriptor;
                const Title = "Estabelecimentos"//options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
                const backColor = options.headerStyle.backgroundColor

                console.log(Title);

                return(
                    <MyHeader
                        color={backColor}
                        title={Title}
                        leftButton={<MenuButton onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}/>}
                        rightButton={ title == 'Estabelecimentos' ? null : <MybackButton onPress={() => navigation.goBack()}/>}
                    />
                )
            }
        }} */
        >
            <Stack.Screen
                name='DashBoard'
                component={DashBoard}
                options={{
                    header: ({ }) => {
                        return (
                            <MyHeader
                               color={backColor}
                               title={Title}
                               leftButton={<MenuButton onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />}
                               rightButton={title == 'Estabelecimentos' ? null : <MybackButton onPress={() => navigation.goBack()} />}
                            />
                        )
                    }
                }}
                initialParams={route.params}
            />
            <Stack.Screen
                name='Categorias'
                component={Categorias}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />

            <Stack.Screen
                name='Pagamento'
                component={Pagamento}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name='Descricao'
                component={Descricao}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
        </Stack.Navigator>
    )
}

export default RouteDashBoard