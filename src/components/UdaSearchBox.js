import React, { Component } from 'react';
import SearchInput from './SearchInput.js';
import SearchButton from './SearchButton';
import UdaSearchBoxStyle from '../stylesheets/UdaSearchBoxStyle.js';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholderMap: null,
      placeholderPlace: null,
      iconVisible: true,
      iconActive: true,
    }
  }

  render() {
    const {
      placeholderMap,
      placeholderPlace,
      iconVisible,
      iconActive,
    } = this.state
    return (
      <div style={UdaSearchBoxStyle}>
        <SearchInput
          placeholderMap={placeholderMap}
          placeholderPlace={placeholderPlace}
          iconVisible={iconVisible}
          iconActive={iconActive}
        />
        <SearchButton />
      </div>
    );
  }
}

export default UdaSearchBox;
