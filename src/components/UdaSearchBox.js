import React, { Component } from 'react';
import Places from './Places.js';
import Cadastre from './Cadastre.js'
import IconInput from './IconInput.js';
import SearchButton from './SearchButton';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      iconActive: true,
    }
  }

  render() {
    const {
      placeholderPlaces,
      placeholderCadastre,
      placesOn,
      cadastreOn,
      configPlaces,
      configCadastre,
    } = this.props;
    return (
      <div>
        <Places
          placeholder={placeholderPlaces}
          status={placesOn}
          config={configPlaces}
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
        <SearchButton />
      </div>
    );
  }
}

export default UdaSearchBox;