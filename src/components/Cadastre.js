import React, { Component } from 'react';
import axios from 'axios';

const url ='http://geo.reds.urbandataanalytics.com/geocoder/api/v1.0/cadastre/8925602VK3782F0012JB';


class Cadastre extends Component {
  constructor (props) {
    super(props);
    this.state = {
      refCadastre: null,
      latlng: null,
    }
  }

  componentDidMount() {
    axios({
    url: url,
    method: 'get',
    auth: {
            username: 'adalab',
            password: '4286'
        }
    // headers: {
    //     'Authorization': 'ba800d5f-ccb0-4e6e-91ed-7072ceeec58f'
    // }
 })
      .then(res => {
        const feature = res.data;
        console.log(url);
        console.log(feature);
        // this.setState({
        //   latlng: feature
        // });
        console.log(this.state.latlng);
      })
    }

    render() {
        return (
            <div>
                {/* <label
                    htmlFor="input-search"
                    style={{ display: 'none' }}
                >
                    {placeholder}
                </label>
                <input id='urbanTourPlaces'
                    placeholder={placeholder}
                    ref={(input) => { this.autoCompletePlace = input; }} /> */}
            </div>
        );
    }
}

export default Cadastre;
