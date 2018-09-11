import React, { Component } from 'react';
import { buttonSearch } from '../stylesheets/StylesSearchBox';

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