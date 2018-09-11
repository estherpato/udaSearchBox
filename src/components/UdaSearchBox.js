import React, { Component } from 'react';
import Places from './Places.js';
import Cadastre from './Cadastre.js'
import IconInput from './IconInput.js';
import SearchButton from './SearchButton';
// import { getToken } from '../services/Auth.js';
import request from 'axios';
import { searchBox, imputIconsBox } from '../stylesheets/StylesSearchBox';

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
      url: 'http://geo.reds.urbandataanalytics.com/geocoder/api/v1.0/cadastre/',
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeCadastre = this.onChangeCadastre.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onClickHandlerPlaces = this.onClickHandlerPlaces.bind(this);
    this.onClickHandlerCadastre = this.onClickHandlerCadastre.bind(this);
  }

  componentDidMount() {
    this.getToken('adalab', '4286')
  }

  getToken(user, pwd) {
    const reports = {
      url: 'https://reds.urbandataanalytics.com/management/api/v1.0/login',
      data: { 'username': user, 'password': pwd },
      headers: { 'Content-Type': 'application/json' }
    };

    return new Promise((resolve, reject) => {
      request.post(reports.url, reports.data, { headers: reports.headers })
        .then(res => {
          const authToken = res.data.authToken;
          console.log(authToken)
          this.setState({ token: authToken }, () => console.log('token', this.state.token));
        })
        .catch(e => {
          //resolve(e.response.data.error)
          resolve(e.response)
        })
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

  onChangeCadastre (e) {
    this.setState(
      {
          refCadastre: e.target.value,
        }, () => {
          this.setState (
            {
              url: 'http://geo.reds.urbandataanalytics.com/geocoder/api/v1.0/cadastre/'+this.state.refCadastre,
            }
          )
        }
    );
    console.log(this.state.url)
  }

  onSubmitHandler() {
    console.log(this.props);
    //this.props.cadastreOn=true ? console.log('hola catastro') :
    // const lat = this.state.lat;
    // const lng = this.state.lng;
    //console.log('hola palces')
  }

  onClickHandlerPlaces(e) {
    this.setState({
      placesActive: true,
      cadastreActive: false,
    })
  }

  onClickHandlerCadastre() {
    this.setState({
      placesActive: false,
      cadastreActive: true,
    })
  }

  render() {
    const {
      placeholderPlaces,
      placeholderCadastre,
      placesOn,
      cadastreOn,
      onSubmit,
      configPlaces,
      configCadastre,
    } = this.props.config;

    return (
      <div style={searchBox}>
        <div style={imputIconsBox}>
          {this.state.placesActive && <Places
            placeholder={placeholderPlaces}
            config={configPlaces}
            onChangeHandler={this.onChangeHandler}
          />}
          {this.state.cadastreActive && <Cadastre
            placeholder={placeholderCadastre}
            config={configCadastre}
            onChangeCadastre={this.onChangeCadastre}
            url={this.state.url}
            token={this.state.token}
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
          onSubmitHandler={this.onSubmitHandler}
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
    );
  }
}

export default UdaSearchBox;
