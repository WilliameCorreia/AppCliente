export const initialStateCliente = {
    User: null
}

export const UserReducerCliente = (state, action) => {
    switch (action.type) {
        case 'AddUser':
            return {...state, User: action.user}
            break;
            case 'delUser':
                return {...state, User: null }
                break;
        default:
            break;
    }
}