import React, { Component } from 'react';
import axios from 'axios';
import {inputBox, formCadastre,inputCadastre } from '../stylesheets/StylesSearchBox';

class Cadastre extends Component {
    render() {
        const {
            placeholder,
            statusCadastre,
            config,
            onChangeCadastre
        } = this.props
    console.log(this.props)

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
      <input style= {inputCadastre} type='text' onChange={onChangeCadastre}/>
    </form>);
  }
}

export default Cadastre;
