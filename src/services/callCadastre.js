import axios from 'axios';

export function coordinatesCadastre () {
  const {token,url} = this.state;
  const textToken = 'Token ';
  const concatToken = textToken.concat(token);
  console.log(concatToken)

  axios({
    url: url,
    method: 'get',
    // auth: {
    //         username: 'adalab',
    //         password: '4286'
    //     },
    headers: {
      'Authorization': concatToken
    }
  }).then(res => {
    const feature = res.data;
    const lat = feature.lat;
    const lng = feature.lon;
    console.log(lat,lng);
    this.setState({
      latlng: {
        lat: lat,
        lng: lng
      }
    });
  })

}
