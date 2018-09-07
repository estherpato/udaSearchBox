import React, { Component } from 'react';
import {buttonSearch} from './StylesSearchBox';
class SearchButton extends Component {
    render() {
        return (
            <div>
                <button style = {buttonSearch}>Search</button>
            </div>
        );
    }
}

export default SearchButton;