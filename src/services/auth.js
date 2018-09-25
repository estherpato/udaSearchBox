import axios from 'axios';

export function getToken(user, pwd) {
    const reports = {
        url: 'https://reds.urbandataanalytics.com/management/api/v1.0/login',
        data: { 'username': user, 'password': pwd },
        headers: { 'Content-Type': 'application/json' }
    };

    return new Promise((resolve, reject) => {
        axios.post(reports.url, reports.data, { headers: reports.headers })
            .then(res => {
                resolve(res)
            })
            .catch(function (e) {
                let error = new Error('Bad credentials. This component will works but you still will need a valid token for most uDA components. Please contact support@urbandataanalytics.com to get your token.', e);
                reject(error);
              });
        
    })
}
