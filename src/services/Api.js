import axios from 'axios';

const api = axios.create({
    baseURL: 'http://3.22.178.76:11000/api/'
    //baseURL: 'https://44ad5eefdfc0.ngrok.io/api/'
});


api.interceptors.response.use(
    
)

export default api;