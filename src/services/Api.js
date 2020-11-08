import axios from 'axios';
import { Alert } from 'react-native';

const api = axios.create({
    baseURL: 'http://3.22.178.76:12000/api/'
    //baseURL: 'https://44ad5eefdfc0.ngrok.io/api/'
});

api.interceptors.response.use(
    response => {
        /* console.log("=>>>>>>>>>>>>>>>>>>>>>>")
        console.log(response)
        console.log("=>>>>>>>>>>>>>>>>>>>>>>") */
        return response;
    },
    error => {

        console.log(error);

        Alert.alert(error.message);
        /* if (
            error.request._hasError === true &&
            error.request._response.includes('connect')
        ) {
            Alert.alert(
                'Aviso',
                'Não foi possível conectar aos nossos servidores, sem conexão a internet',
                [{ text: 'OK' }],
                { cancelable: false },
            )
        } */

        if (error.response.status == 401) {

            console.log("token Expirado!")

            const requestConfig = error.config

            // O token JWT expirou

            /*  async function GetAuth(){
                 getUser().then(dados => {
                     console.log(dados)
                     if (dados == null) {
                         Api.post('Auth/login', credenciais).then(dados => {
                             const { token } = dados.data
                             saveUser(token);
                             console.log(dados);
                         }).catch(error => {
                             console.log(error)
                         })
                     }
                 })
             } */

            /* deleteUser().then(() =>{
                GetAuth();
            }) */

           // return axios(requestConfig)
        }

        api.interceptors.request.use(
            config => {
                console.log(config);
                return config
                /* console.log(config);
                return getUser().then(token => {
                    if (token) {
                        config.headers.Authorization = `Bearer ${token}`
                        return Promise.resolve(config)
                    }
                }).catch(error => {
                    console.log(error)
                    return Promise.reject(error)
                }) */
            }
        )

        //return Promise.reject(error)
    },
)

export default api;