export const initialStateCliente = {
    User: {
        cod_Client: 5,
        cpf: null,
        data_Nascimento: '',
        email: '',
        email_Enviar: false,
        enderecos: [{
            numero: "",
            rua: "",
            cidade: "",
            bairro: "",
            estado: "",
            cep: 0,
            complemento: "",
            estabelecimentoId: 0,
            clienteId: 0,
        }],
        nome_Client: '',
        rg: null,
        sms_Enviar: false,
        telefone: null,
        token: '',
        token_Login: '',
    }
}

export const UserReducerCliente = (state, action) => {
    switch (action.type) {
        case 'AddUser':
            return { User: action.user }
            break;
        case 'delUser':
            return { ...state, User: null }
            break;
        case 'setNome':
            return { ...state, nome_Client: action.nome_Client }
            break;
        case 'setEmail':
            return { ...state, email: action.email }
            break;
        case 'setCpf':
            return { ...state, cpf: action.cpf }
            break;
        case 'setTelefone':
            return { ...state, telefone: action.telefone }
            break;
        case 'setEndereco':
            return { ...state, nome_Client: action.nome_Client }
            break;
        default:
            return { ...state }
            break;
    }
}