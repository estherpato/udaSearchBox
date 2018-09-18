import React, { Component } from 'react';
import { formCadastre, inputCadastre, labelHidden } from '../stylesheets/stylesSearchBox';
import PropTypes from 'prop-types';

class Cadastre extends Component {
    render() {
        const {
            placeholder,
            onChangeHandlerCadastre,
            onSubmitHandler,
        } = this.props

        return (
            <form
                style={formCadastre}
                onSubmit={onSubmitHandler}
            >
                <label
                    htmlFor="input-search"
                    style={labelHidden}
                >
                    {placeholder}
                </label>
                <input
                    style={inputCadastre}
                    type='text'
                    onChange={onChangeHandlerCadastre}
                    placeholder={placeholder}
                />
            </form>
        );
    }
}

Cadastre.propTypes = {
    placeholder: PropTypes.string,
    onChangeHandlerCadastre: PropTypes.func.isRequired,
    onSubmitHandler: PropTypes.func.isRequired,
};

export default Cadastre;