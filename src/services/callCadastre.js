import request from 'axios';

export function coordinatesCadastre(token, refCadastre) {
    const textToken = 'Token ';
    const concatToken = textToken.concat(token);
    console.log(concatToken)

    const preUrl = 'https://geo.reds.urbandataanalytics.com/geocoder/api/v1.0/cadastre/';
    const url = preUrl + refCadastre;

    const parameters = {
        url: url,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': concatToken
        }
    }
    return new Promise((resolve, reject) => {
        request.get(parameters.url, { headers: parameters.headers })
            .then(res => {
                resolve(res)
                console.log(res)
            })
            .catch(e => {
                resolve(e.response)
            })
    })
}
