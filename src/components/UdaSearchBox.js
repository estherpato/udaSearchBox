import React, { Component } from 'react';
import Places from './AlgoliaPlaces.js';
import IconInput from './IconInput.js';
import SearchButton from './SearchButton';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placeholder: 'Search by address',
      iconVisiblePlace: true,
      iconVisibleMap: true,
      disabled: false,
    }
  }

  render() {
    const {
      placeholder,
      iconVisiblePlace,
      iconVisibleMap,
      disabled,
    } = this.state
    return (
      <div>
        <Places
          placeholder={placeholder}
          iconVisiblePlace={iconVisiblePlace}
          iconVisibleMap={iconVisibleMap}
          disabled={disabled}
        />
        <IconInput
          iconVisiblePlace={iconVisiblePlace}
          iconVisibleMap={iconVisibleMap}
          disabled={disabled}
        />
        <SearchButton />
      </div>
    );
  }
}

export default UdaSearchBox;