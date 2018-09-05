import React, { Component } from 'react';
import IconInput from './IconInput.js';

class SearchInput extends Component {
    render() {
        const {
            placeholderMap,
            placeholderPlace,
            iconVisible,
            iconActive,
        } = this.props
        return (
            <div>
                <input type="search" id="input-search" placeholder="Voy a ser una prop" />
                <IconInput
                    iconVisible={iconVisible}
                    iconActive={iconActive}
                />
                <IconInput />
            </div>
        );
    }
}

export default SearchInput;