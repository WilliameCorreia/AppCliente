export const initialStateStabelecimento = {}

export const UserReducerEstabelecimento = (state, action) => {
    switch (action.type) {
        case 'setEstabelecimento': 
            return { ...state, Estabelecimento: action.estabelecimento }
            break;
        default:
            break;
    }
}