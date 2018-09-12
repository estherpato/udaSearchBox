import request from 'axios';

export function coordinatesCadastre (token,url) {
  const textToken = 'Token ';
  const concatToken = textToken.concat(token);
  console.log(concatToken)

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
                //resolve(e.response.data.error)
                resolve(e.response)
            })
    })
}
