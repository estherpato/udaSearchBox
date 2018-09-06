import React, { Component } from 'react';
import Places from './AlgoliaPlaces.js';
import SearchButton from './SearchButton';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Search by address',
      iconVisiblePlace: true,
      iconVisibleMap: true,
      iconActive: true,
    }
  }

  render() {
    const {
      placeholder,
      iconVisiblePlace,
      iconVisibleMap,
      iconActive,
    } = this.state
    return (
      <div>
        <Places
          placeholder={placeholder}
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
