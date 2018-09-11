import React, {Component} from 'react';
import axios from 'axios';
import {inputBox, formCadastre,inputCadastre } from '../stylesheets/StylesSearchBox';

const url = 'http://geo.reds.urbandataanalytics.com/geocoder/api/v1.0/cadastre/8925602VK3782F0012JB';

class Cadastre extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      refCadastre: null,
      latlng: {
        lat: null,
        lng: null
      }
    }
  }

  componentDidMount() {


    axios({
      url: url, method: 'get',
      // auth: {
      //         username: 'adalab',
      //         password: '4286'
      //     },
      headers: {
        'Authorization': 'Token ba800d5f-ccb0-4e6e-91ed-7072ceeec58f'
      }
    }).then(res => {
      const feature = res.data;
      const lat = feature.lat;
      const lng = feature.lon;
      console.log(feature);
      console.log(lat);
      console.log(lng);
      this.setState({
        latlng: {
          lat: lat,
          lng: lng
        }
      });
      console.log(this.state.latlng);
    })
  }

  render() {
    const {
        placeholder,
        statusCadastre,
        config,
        onChangeCadastre
    } = this.props
    return (
      <form 
      status={statusCadastre}
      style={formCadastre}
      >
      <label htmlFor="input-search" style={{
          display: 'none'
        }}>
        {placeholder}
      </label>
      <input style= {inputCadastre} type='text' onChange={onChangeCadastre}/>
    </form>);
  }
}

export default Cadastre;
