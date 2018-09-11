import React, { Component } from 'react';

class Cadastre extends Component {

    render() {
        const {
            placeholder,
            statusCadastre,
            config,
            OnChangeCadastre,
        } = this.props
        return (
            <div>
                <label
                    htmlFor="input-search"
                    style={{ display: 'none' }}
                >
                    {placeholder}
                </label>
                <input id='urbanTourPlaces'
                    placeholder={placeholder}
                    ref={(input) => { this.autoCompletePlace = input; }} />
            </div>
        );
    }
}

export default Cadastre;