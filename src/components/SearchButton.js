import React, { Component } from 'react';
import { buttonSearch } from '../stylesheets/StylesSearchBox';
import PropTypes from 'prop-types';

class SearchButton extends Component {
    render() {
        return (
                <button
                    style={buttonSearch}
                    type="submit"
                    onClick={this.props.onSubmitHandler}
                >
                    Search
                </button>
        );
    }
}

export default SearchButton;

SearchButton.PropTypesm = {
    style: PropTypes.object,
    onClick: PropTypes.func
  };