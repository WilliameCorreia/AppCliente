import axios from 'axios';
import { Alert } from 'react-native';

const EnviaNotificacaoMercantil = (estabelecimentoId) => {
    axios.post(`https://onesignal.com/api/v1/notifications`, {
        app_id: "59bd77cc-736c-4d0c-a4f0-2991c74577f8",
        contents: { "en": "Atenção, você acaba de receber um novo pedido!" },
        include_external_user_ids: [estabelecimentoId]
    }, {
        headers: {
            'Authorization': `Basic Njk4NjJlZGQtMjZmNi00MGM5LTlkYmItMWJkNTZiODdjNjMz`
        }
    }).then(response => {
        console.log(response);
    });

}

export default EnviaNotificacaoMercantil;