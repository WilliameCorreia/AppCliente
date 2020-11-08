export const initialStateStabelecimento = {
    Estabelecimento: '',
    Produtos: [],
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
            return { ...state, Produtos: [...state.Produtos.filter((x) => x.codeBar !== action.produto.codeBar)] }
            break;
        case 'AddPedido':
            return { ...state, Pedido: action.pedido }
            break;
        case 'AddCarrinho':
            return { ...state, Carrinho: action.carrinho }
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