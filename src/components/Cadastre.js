import React, {Component} from 'react';
import axios from 'axios';
import {inputBox} from '../stylesheets/StylesSearchBox';



class Cadastre extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      latlng: {
        lat: null,
        lng: null
      }
    }
  }



  componentDidMount() {

    const {token,url} = this.props;
    const textToken = 'Token ';
    const concatToken = textToken.concat(token);
    console.log(url)

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
      console.log(lat);
      this.setState({
        latlng: {
          lat: lat,
          lng: lng
        }
      });
    })
    console.log(this.state.latlng)
  }

  render() {
    const {
        placeholder,
        statusCadastre,
        config,
        onChangeCadastre,
    } = this.props
    return (
      <form status={statusCadastre}>
      <label htmlFor="input-search" style={{
          display: 'none'
        }}>
        {placeholder}
      </label>
      <input style={inputBox} type='text' onChange={onChangeCadastre}/>
    </form>);
  }
}

export default Cadastre;
