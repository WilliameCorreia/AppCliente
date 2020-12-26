export const initialStateCliente = {
    User: null,
    User1: {
        nome_Client: "",
        email: "",
        cpf: "",
        rg: "",
        telefone: "",
        sms_Enviar: true,
        email_Enviar: true,
        token_Login: "",
        enderecos: [
            {
                numero: "",
                rua: "",
                cidade: "",
                bairro: "",
                estado: "",
                cep: 0,
                complemento: "",
            }
        ]
    }
}

export const UserReducerCliente = (state, action) => {
    switch (action.type) {
        case 'AddUser':
            return { ...state, User: action.user }
            break;
        case 'delUser':
            return { ...state, User: null }
            break;
        case 'setNome':
            return { ...state, nome_Client: action.nome_Client }
            break;
        case 'setEmail':
            return { ...state, nome_Client: action.nome_Client }
            break;
        case 'setCpf':
            return { ...state, nome_Client: action.nome_Client }
            break;
        case 'setTelefone':
            return { ...state, nome_Client: action.nome_Client }
            break;
        case 'setEndereco':
            return { ...state, nome_Client: action.nome_Client }
            break;
        default:
            return { ...state }
            break;
    }
}