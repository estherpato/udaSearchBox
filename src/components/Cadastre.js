import React, { Component } from 'react';
import axios from 'axios';
import { inputBox, formCadastre, inputCadastre } from '../stylesheets/StylesSearchBox';
import PropTypes from 'prop-types';


class Cadastre extends Component {
    render() {
        const {
            placeholder,
            statusCadastre,
            config,
            onChangeCadastre
        } = this.props

        return (
            <form
                status={statusCadastre}
                style={formCadastre}
            >
                <label htmlFor="input-search" style={{
                    display: 'none'
                }}>
                    {placeholder}
                </label>
                <input style={inputCadastre} type='text' onChange={onChangeCadastre} placeholder={placeholder}/>
            </form>);
    }
}

Cadastre.propTypes = {
    refCadastre: PropTypes.number,
    cadastreActive: PropTypes.bool,
    statusCadastre: PropTypes.bool,
    latlng: PropTypes.obj,
    placeholder: PropTypes.string,
    config: PropTypes.obj,
    onChangeCadastre: PropTypes.func
};


export default Cadastre;
