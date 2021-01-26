import { act } from "react-test-renderer";

export const initialStateStabelecimento = {
    Estabelecimento: '',
    Produtos: [],
    Carrinho: []
}

export const UserReducerEstabelecimento = (state, action) => {
    switch (action.type) {
        case 'setEstabelecimento':
            return { ...state, Estabelecimento: action.estabelecimento }
            break;
        case 'setProdutos':
            if (state.Produtos.length > 0) {

                let flag = false;

                state.Produtos.map(item => {
                    if (item.codeBar === action.produto.codeBar) {
                        flag = true;
                        item.quantidade += action.produto.quantidade
                    }
                })

                if (flag) {
                    return {
                        ...state
                    }
                } else {
                    return {
                        ...state, Produtos: [...state.Produtos, action.produto]
                    }
                }
            } else {
                return {
                    ...state, Produtos: [action.produto]
                }
            }
            break;
        case 'AddProdutosQuantidade':
            state.Produtos.map(item => {
                if (item.codeBar === action.produto.codeBar) {
                    item.quantidade = item.quantidade + 1
                }
            })
            return { ...state }
            break;
        case 'removerProdutosQuantidade':
            state.Produtos.map(item => {
                if (item.codeBar === action.produto.codeBar) {
                    item.quantidade = item.quantidade - 1
                }
            })
            return { ...state }
            break;
        case 'deletarProduto':
            return { ...state, Carrinho: [...state.Carrinho.filter((x) => x.produtosId !== action.carrinho.produtosId)] }
            // return { ...state, Carrinho: [...state.Carrinho.filter((x) => x.item_Id !== action.carrinho.item_Id)] }
            break;
        case 'AddPedido':
            return { ...state, Pedido: action.pedido }
            break;
        case 'AddCarrinho':
            if (action.logado && action.Carrinho) {
                let list = action.Carrinho
                // if(action.Carrinho.length > 0){
                    state.Carrinho.map(produto_ => {
                        if(!produto_.clientes.cod_Client){
                            let adicionar = true
                            list.map(carrinho => {
                                if (carrinho.produtos._Produto === produto_.produtos._Produto) {
                                    carrinho.quantidade = carrinho.quantidade + produto_.quantidade
                                    adicionar = false
                                }
                            })
                            if(adicionar){
                                list.push(produto_)
                            }
                        }
                    })
                // }
                // else{
                //     // let adiciona = true
                //     // state.Carrinho.map(produto_ => {
                //     //     if(produto_.produtos._Produto === action.Carrinho.produtos._Produto){
                //     //         state.Carrinho.quantidade = state.Carrinho.quantidade + action.Carrinho.quantidade
                //     //         adiciona = false
                //     //     }
                //     // })
                //     list = state.Carrinho
                //     list.push(action.Carrinho)
                //     // if(adiciona){
                //     //     // list.push(action.Carrinho)
                //     // }
                // }
                return { ...state, Carrinho: list }
            } else {
                if (state.Carrinho.length > 0) {
                    let opcao = false
                    state.Carrinho.map(carrinho => {
                        if (carrinho.produtos._Produto === action.carrinho[0].produtos._Produto) {
                            opcao = true
                            carrinho.quantidade = carrinho.quantidade + action.carrinho[0].quantidade
                        }
                    })
                    if (opcao) {
                        return { ...state, Carrinho: state.Carrinho }
                    } else {
                        return { ...state, Carrinho: [...state.Carrinho, action.carrinho[0]] }
                    }
                } else {
                    return { ...state, Carrinho: [...state.Carrinho, action.carrinho[0]] }
                }
            }
            break;
        case 'AddQuantidade':
            state.Carrinho.map(item => {
                if (action.carrinho === item) {
                    item.quantidade = item.quantidade + 1
                }
            })
            return { ...state }
            break;
        case 'RemoverQuantidade':
            state.Carrinho.map(item => {
                if (action.carrinho === item) {
                    item.quantidade = item.quantidade - 1
                }
            })
            return { ...state }
            break;
        default:
            break;
    }
}