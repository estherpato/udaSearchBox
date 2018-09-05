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
      iconVisiblePlace: true,
      iconVisibleMap: true,
      iconActive: true,
    }
  }

  render() {
    const {
      placeholderMap,
      placeholderPlace,
      iconVisiblePlace,
      iconVisibleMap,
      iconActive,
    } = this.state
    return (
      <div style={UdaSearchBoxStyle}>
        <SearchInput
          placeholderMap={placeholderMap}
          placeholderPlace={placeholderPlace}
          iconVisiblePlace={iconVisiblePlace}
          iconVisibleMap={iconVisibleMap}
          iconActive={iconActive}
        />
        <SearchButton />
      </div>
    );
  }
}

export default UdaSearchBox;
