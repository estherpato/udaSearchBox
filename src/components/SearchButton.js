import React, { Component } from 'react';
import { buttonSearch } from '../stylesheets/StylesSearchBox';

class SearchButton extends Component {
    render() {
        return (
            <div>
                <button
                    style={buttonSearch}
                    type="submit"
                    onClick={this.props.onSubmitHandler}
                >
                    Search
                </button>
            </div>
        );
    }
}

export default SearchButton;