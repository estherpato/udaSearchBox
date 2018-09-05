import React, { Component } from 'react';
import SearchInput from './SearchInput.js';
import SearchButton from './SearchButton';

class UdaSearchBox extends Component {
  render() {
    return (
      <div>
        <SearchInput />
        <SearchButton />
      </div>
    );
  }
}

export default UdaSearchBox;
