import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MyHeader from '../componentes/MyHeader';
import MenuButton from '../componentes/MenuButton';
import MybackButton from '../componentes/MybackButton';
import { DrawerActions } from '@react-navigation/native';
import DashBoard from '../pages/DashBoard.js/Dashboard';
import Pagamento from '../pages/Pagamento/Pagamento';
import Categorias from '../pages/Categorias/Categorias';
import Descricao from '../pages/DescricaoProduto/DescricaoProduto';
import MeusProdutos from '../pages/MeusProdutos/MeusProdutos';
import Carrinho from '../pages/Carrinho/Carrinho';
import PerfilUsuario from '../pages/PerfilUsuario/PerfilUsuario';
import MeusPedidos from '../pages/MeusPedidos/MeusPedidos';
import Login from '../pages/Login/Login';
import Cadastro from '../pages/Cadastro/Cadastro';
import PagamentoEfetuado from '../pages/PedidoEfetuado/PedidoEfetuado';

const Stack = createStackNavigator();

function RouteDashBoard() {
    return (
        <Stack.Navigator
            initialRouteName={'DashBoard'}
            headerMode={'screen'}
            screenOptions={{
                header: ({ scene, navigation }) => {
                    const { options } = scene.descriptor;
                    const Title = options.headerTitle !== undefined ? options.headerTitle : options.title !== undefined ? options.title : scene.route.name;
                    const backColor = options.headerStyle.backgroundColor

                    console.log(Title);
                    console.log(backColor);

                    return (
                        <MyHeader
                            color={backColor}
                            title={Title}
                            leftButton={<MenuButton onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())} />}
                            rightButton={'title' == 'Estabelecimentos' ? null : <MybackButton onPress={() => navigation.goBack()} />}
                        />
                    )
                }
            }}
        >
            <Stack.Screen
                name='DashBoard'
                component={DashBoard}
                options={{ headerStyle: { backgroundColor: '#B32728' }, title: "Estabelecimento" }}
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
            <Stack.Screen
                name='MeusProdutos'
                component={MeusProdutos}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name='CarrinhoCompras'
                component={Carrinho}
                options={{ headerStyle: { backgroundColor: '#B32728' }, title: 'Carrinho de Compras' }}
            />
            <Stack.Screen
                name='user'
                component={PerfilUsuario}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name='MeusPedidos'
                component={MeusPedidos}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name='Cadastro'
                component={Cadastro}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
            <Stack.Screen
                name='PagamentoEfetuado'
                component={PagamentoEfetuado}
                options={{ headerStyle: { backgroundColor: '#B32728' } }}
            />
        </Stack.Navigator>
    )
}

export default RouteDashBoard