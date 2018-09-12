import axios from 'axios';

export function coordinatesCadastre (token, url) {
  const {token,url} = this.state;
  const textToken = 'Token ';
  const concatToken = textToken.concat(token);
  console.log(concatToken)

  axios({
    url: url,
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
