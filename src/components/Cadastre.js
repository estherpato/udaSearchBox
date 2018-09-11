import React, { Component } from 'react';
import axios from 'axios';
import { inputBox, searchBox, imputIconsBox } from '../stylesheets/StylesSearchBox';



class Cadastre extends Component {
  render() {
    const {
        placeholder,
        statusCadastre,
        config,
        onChangeCadastre,
    } = this.props
    return (
    <div style={searchBox}>
    <div style={imputIconsBox}>
      <form status={statusCadastre}>
      <label htmlFor="input-search"
      //  style={{display: 'none'}}
      >
        {placeholder}
      </label>
      <input style={inputBox} type='text' onChange={onChangeCadastre}/>
    </form>
  </div>
  </div>

    );

  }
}

export default Cadastre;
