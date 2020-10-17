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
        default:
            break;
    }
}