export const initialStateCliente = {}

export const UserReducerCliente = (state, action) => {
    switch (action.type) {
        case 'AddUser':
            return {...state, User: action.user}
            break;
            case 'delUser':
                return null
                break;
        default:
            break;
    }
}