import React, { Component } from 'react';
import { buttonSearch } from '../stylesheets/StylesSearchBox';
import PropTypes from 'prop-types';

class SearchButton extends Component {
    render() {
        const {
            onSubmitHandler,
        } = this.props

        return (
            <button
                style={buttonSearch}
                type="button"
                onClick={onSubmitHandler}
            >
                Search
                </button>
        );
    }
}

SearchButton.PropTypes = {
    onSubmitHandler: PropTypes.func.isRequired,
};

export default SearchButton;