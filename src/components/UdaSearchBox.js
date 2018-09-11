import React, { Component } from 'react';
import Places from './Places.js';
import Cadastre from './Cadastre.js'
import IconInput from './IconInput.js';
import SearchButton from './SearchButton';
import { searchBox } from '../stylesheets/StylesSearchBox';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placesActive: true,
      cadastreActive: false,
      lat: null,
      lng: null,
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onClickHandlerPlaces = this.onClickHandlerPlaces.bind(this);
    this.onClickHandlerCadastre = this.onClickHandlerCadastre.bind(this);
  }

  onChangeHandler(e) {
    const lat = e.suggestion.latlng.lat;
    const lng = e.suggestion.latlng.lng;

    this.setState({
      lat: lat,
      lng: lng
    })
  }

  onSubmitHandler() {
    const lat = this.state.lat;
    const lng = this.state.lng;
    console.log(lat, lng)
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
        {this.state.placesActive && <Places
          placeholder={placeholderPlaces}
          config={configPlaces}
          onChangeHandler={this.onChangeHandler}
        />}
        {this.state.cadastreActive && <Cadastre
          placeholder={placeholderCadastre}
          config={configCadastre}
        />}

        <IconInput
          statusPlaces={placesOn}
          statusCadastre={cadastreOn}
          placesActive={this.state.placesActive}
          cadastreActive={this.state.cadastreActive}
          onClickHandlerPlaces={this.onClickHandlerPlaces}
          onClickHandlerCadastre={this.onClickHandlerCadastre}
        />
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
