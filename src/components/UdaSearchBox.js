import React, { Component } from 'react';
import Places from './Places.js';
import Cadastre from './Cadastre.js'
import IconInput from './IconInput.js';
import PopUp from './PopUp.js';
import SearchButton from './SearchButton';
import { getToken } from '../services/auth.js';
import { coordinatesCadastre } from '../services/callCadastre.js';
import { SearchBox, imputIconsBox, buttomSearchBox } from '../stylesheets/stylesSearchBox.js';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);


    this.state = {
      placesActive: true,
      cadastreActive: false,
      popUpIsOpen: false,
      lat: null,
      lng: null,
      token: null,
      refCadastre: '',
      refCadastreApiCall: '',
      error: false,
    }

    this.onChangeHandlerPlaces = this.onChangeHandlerPlaces.bind(this);
    this.onChangeHandlerCadastre = this.onChangeHandlerCadastre.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onClickHandlerPlaces = this.onClickHandlerPlaces.bind(this);
    this.onClickHandlerCadastre = this.onClickHandlerCadastre.bind(this);
    this.onClosePopUp = this.onClosePopUp.bind(this);
  }

  componentDidMount() {
    getToken(this.props.credentials.user, this.props.credentials.password)
      .then((res) => {
        this.setState({ token: res.data.authToken });
      })
      .catch(e => {
        console.log(e.message)
    })
    
  }

  onChangeHandlerPlaces(lat, lng) {
    this.setState({
      lat: lat,
      lng: lng,
    });
    this.props.showCoordinates(lat, lng);
  }

  onChangeHandlerCadastre(e) {
    this.setState({ refCadastre: e.target.value }, () => console.log(this.state.refCadastre))
  }

  //Get coordinates info by sending an address or a cadastre reference
  onSubmitHandler(e) {
    e.preventDefault();
    if (this.state.placesActive) {
      const lat = this.state.lat;
      const lng = this.state.lng;
      if (lat === null || lng === null
        || lat === undefined || lng === undefined) {
        this.setState({
          error: true,
          popUpIsOpen: true,
        }, () => console.log(this.state.lat, this.state.lng));
      }
      this.props.showCoordinates(lat, lng);
    } else if (this.state.cadastreActive) {
      // I compare the cadastre reference on input with a second value I will save when I make the first API call
      // If they are the same, I won't call the API again
      if (this.state.refCadastre === this.state.refCadastreApiCall) {
        if (this.state.lat === null || this.state.lng === null 
          || this.state.lat === undefined || this.state.lng === undefined) {
          this.setState({
            error: true,
            popUpIsOpen: true,
          })
        } else {
          return null
        }
      } else if ((this.state.refCadastreApiCall !== this.state.refCadastre)
        && this.state.refCadastre !== '') {
        console.log('step 1', this.state.refCadastre)
        coordinatesCadastre(this.state.token, this.state.refCadastre)
          .then((res) => {
            this.setState({ refCadastreApiCall: this.state.refCadastre })
            if (res === undefined) {
              this.setState({
                error: true,
                popUpIsOpen: true,
              });
            } else if (res !== undefined && this.state.lng === null) {
              this.setState({
                lat: res.data.lat,
                lng: res.data.lon,
              }, () => console.log(this.state.lat, this.state.lng));
            }
            this.props.showCoordinates(this.state.lat, this.state.lng);
          })
      }
    }
  }

  onClickHandlerPlaces(e) {
    this.setState({
      placesActive: true,
      cadastreActive: false,
      error: false
    })
  }

  onClearHandlerPlaces() {
    this.setState({
      lat: null,
      lng: null,
    })
  }

  onClickHandlerCadastre() {
    this.setState({
      placesActive: false,
      cadastreActive: true,
      error: false
    })
  }

  onClosePopUp() {
    this.setState({
      popUpIsOpen: false,
      error: false,
    },
      () => console.log(this.state.error, this.state.popUpIsOpen))
  }

  render() {
    const {
      credentials,
      placeholderPlaces,
      placeholderCadastre,
      placesOn,
      cadastreOn,
      configPlaces,
      coordinates,
      showCoordinates
    } = this.props;

    const {
      placesActive,
      cadastreActive,
      popUpIsOpen,
    } = this.state


    return (
      <div style={SearchBox}>
        <div style={imputIconsBox}>
          {((this.state.placesActive && placesOn)
            || (!cadastreOn))
            && <Places
              placeholder={placeholderPlaces}
              config={configPlaces}
              onChangeHandlerPlaces={this.onChangeHandlerPlaces}
              onSubmitHandler={this.onSubmitHandler}
              onChangeHandlerPlaces={this.onChangeHandlerPlaces}
            />}
          {((this.state.cadastreActive && cadastreOn)
            || (!placesOn && cadastreOn))
            && <Cadastre
              placeholder={placeholderCadastre}
              onChangeHandlerCadastre={this.onChangeHandlerCadastre}
              onSubmitHandler={this.onSubmitHandler}
            />}
          <IconInput
            statusPlaces={placesOn}
            statusCadastre={cadastreOn}
            placesActive={placesActive}
            cadastreActive={cadastreActive}
            onClickHandlerPlaces={this.onClickHandlerPlaces}
            onClickHandlerCadastre={this.onClickHandlerCadastre}
          />
        </div>

        <div style={buttomSearchBox}>
          {((this.state.cadastreActive && cadastreOn)
            || (!placesOn && cadastreOn))
            && <SearchButton
              onSubmitHandler={this.onSubmitHandler}
            />}
        </div>

        {(this.state.error)
          && <PopUp
            placesStatus={this.state.placesActive}
            cadastreStatus={this.state.cadastreActive}
            popUpStatus={popUpIsOpen}
            onClosePopUp={this.onClosePopUp}
          />}
      </div>
    );
  }
}

export default UdaSearchBox;
