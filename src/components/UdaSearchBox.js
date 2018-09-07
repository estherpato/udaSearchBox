import React, { Component } from 'react';
import Places from './Places.js';
import Cadastre from './Cadastre.js'
import IconInput from './IconInput.js';
import SearchButton from './SearchButton';
import { searchBox } from './StylesSearchBox';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconActive: true,
      lat: null,
      lng: null,
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
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
    console.log('soy el botón')
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
        <Places
          placeholder={placeholderPlaces}
          status={placesOn}
          config={configPlaces}
          onChangeHandler={this.onChangeHandler}
        />
        <Cadastre
          placeholder={placeholderCadastre}
          status={cadastreOn}
          config={configCadastre}
        />
        <IconInput
          statusPlaces={placesOn}
          statusCadastre={cadastreOn}
          active={this.state.iconActive}
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
