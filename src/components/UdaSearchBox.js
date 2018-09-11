import React, {Component} from 'react';
import Places from './Places.js';
import Cadastre from './Cadastre.js'
import IconInput from './IconInput.js';
import SearchButton from './SearchButton';
import { getToken } from '../services/auth.js';
import axios from 'axios';
import '../stylesheets/style.css';
import {SearchBox, imputIconsBox } from '../stylesheets/StylesSearchBox';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placesActive: true,
      cadastreActive: false,
      lat: null,
      lng: null,
      token: null,
      refCadastre: '',
      url: 'http://geo.reds.urbandataanalytics.com/geocoder/api/v1.0/cadastre/'
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeCadastre = this.onChangeCadastre.bind(this);
    this.coordinatesCadastre = this.coordinatesCadastre.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onClickHandlerPlaces = this.onClickHandlerPlaces.bind(this);
    this.onClickHandlerCadastre = this.onClickHandlerCadastre.bind(this);
  }

  componentDidMount() {
    getToken('adalab', '4286')
      .then((res) => {
        const authToken = res.data.authToken;
        this.setState({ token: authToken }, () => console.log('token', this.state.token));
      })
  }

  onChangeHandler(lat, lng) {
    this.setState({
      lat: lat,
      lng: lng,
      // style:false,
    })
    this.props.onChange(lat, lng)
  }

  onChangeCadastre(e) {
    this.setState({
      refCadastre: e.target.value
    }, () => {
      this.setState({
        url: 'http://geo.reds.urbandataanalytics.com/geocoder/api/v1.0/cadastre/' + this.state.refCadastre
      })
    });
    console.log(this.state.refCadastre)
  }


  coordinatesCadastre () {
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

  onSubmitHandler(e) {
    if (this.state.placesActive) {
      const lat = this.state.lat;
      const lng = this.state.lng;
      console.log('lat,lng', lat, lng)
    } else if (this.state.cadastreActive) {
      this.coordinatesCadastre();
    }
  }

  onClickHandlerPlaces(e) {
    this.setState({placesActive: true, cadastreActive: false})
  }

  onClickHandlerCadastre() {
    this.setState({placesActive: false, cadastreActive: true})
  }

  render() {
    const {
      placeholderPlaces,
      placeholderCadastre,
      placesOn,
      cadastreOn,
      onSubmit,
      configPlaces,
      configCadastre
    } = this.props.config;

    return (
      <div style={SearchBox}>
        <div style={imputIconsBox}>
          {((this.state.placesActive && placesOn) || (!cadastreOn)) && <Places
            placeholder={placeholderPlaces}
            config={configPlaces}
            onChangeHandler={this.onChangeHandler}
          />}
          {((this.state.cadastreActive && cadastreOn) || (!placesOn && cadastreOn)) && <Cadastre
            placeholder={placeholderCadastre}
            config={configCadastre}
            onChangeCadastre={this.onChangeCadastre}
          />}
          <IconInput
            statusPlaces={placesOn}
            statusCadastre={cadastreOn}
            placesActive={this.state.placesActive}
            cadastreActive={this.state.cadastreActive}
            onClickHandlerPlaces={this.onClickHandlerPlaces}
            onClickHandlerCadastre={this.onClickHandlerCadastre}
          />
        </div>
        <SearchButton
          config={configCadastre}
          onSubmitHandler={this.onSubmitHandler}
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
      );
  }
}

export default UdaSearchBox;
