import React, {Component} from 'react';
import Places from './Places.js';
import Cadastre from './Cadastre.js'
import IconInput from './IconInput.js';
import SearchButton from './SearchButton';
import { getToken } from '../services/auth.js';
import { coordinatesCadastre } from '../services/callCadastre.js';
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
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeCadastre = this.onChangeCadastre.bind(this);
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
    })
    this.props.onChange(lat, lng)
  }

  onChangeCadastre(e) {
    this.setState({
      refCadastre: e.target.value
    })
  }

  onSubmitHandler(e) {
    if (this.state.placesActive) {
      const lat = this.state.lat;
      const lng = this.state.lng;
      console.log('lat,lng', lat, lng)
    } else if (this.state.cadastreActive) {
      this.onChangeCadastre(e)
      coordinatesCadastre(this.state.token, this.state.refCadastre)
      .then((res) => {
        const lat = res.data.lat;
        const lng = res.data.lon;
        this.setState({
          lat: lat,
          lng: lng
         });
         console.log(lat,lng)
      })
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
