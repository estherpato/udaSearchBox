import React, { Component } from 'react';
import Places from './Places.js';
import Cadastre from './Cadastre.js'
import IconInput from './IconInput.js';
import Modal from './Modal.js';
import SearchButton from './SearchButton';
import { getToken } from '../services/auth.js';
import { coordinatesCadastre } from '../services/callCadastre.js';
import propTypes from 'prop-types';
import '../stylesheets/style.css';
import { SearchBox, imputIconsBox } from '../stylesheets/StylesSearchBox';

class UdaSearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      placesActive: true,
      cadastreActive: false,
      modalIsOpen: true,
      lat: null,
      lng: null,
      token: null,
      refCadastre: '',
      error: ''
    }

    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeCadastre = this.onChangeCadastre.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onClickHandlerPlaces = this.onClickHandlerPlaces.bind(this);
    this.onClickHandlerCadastre = this.onClickHandlerCadastre.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  componentDidMount() {
    getToken('adalab', '4286')
      .then((res) => {
        const authToken = res.data.authToken;
        this.setState({ token: authToken }, () => console.log('token', this.state.token));
      })
      // .catch((error) => {
      //   console.error("holi", error);
      //   this.setState({ error: 'hay un error' })
      // });
    // .catch((error) => {this.setState({error: 'mensaje'})});
  }

  onChangeHandler(lat, lng) {
    this.setState({
      lat: lat,
      lng: lng,
    })
  } 
  

  onChangeCadastre(e) {
    this.setState({
      refCadastre: e.target.value
    })
  }

  onSubmitHandler(e) {
    e.preventDefault();
    if (this.state.placesActive) {
      
      const lat = this.state.lat;
      const lng = this.state.lng;
      console.log('lat,lng', lat, lng);
      if (lat!== null && lng !== null) {
        this.setState({
          lat: lat,
          lng: lng
         });} else {
          this.setState({
          error: "hay un error"
           }); 
          }
    } else if (this.state.cadastreActive) {
      this.onChangeCadastre(e)
      if (this.state.refCadastre === e.target.value) {
        return null
      } else if (this.state.refCadastre !== e.target.value) {
        coordinatesCadastre(this.state.token, this.state.refCadastre)
        .then((res) => {
          if (res !== undefined) {
            console.log(res)
            const lat = res.data.lat;
            const lng = res.data.lon;
            console.log(lat,lng);
            this.setState({ 
              lat: res.data.lat,
              lng: res.data.lon
             });} else {
              const error= "hay un error";
              this.setState({
              error: error
               }); 
             }
        })
      }
    }
    
  }

  onClickHandlerPlaces(e) {
    this.setState({ placesActive: true, cadastreActive: false })
  }

  onClickHandlerCadastre() {
    this.setState({ placesActive: false, cadastreActive: true })
  }

  onCloseModal() {
    this.setState({ modalIsOpen: false , error: "", placesActive: true, cadastreActive:"",})
  }

  render() {
    //  console.log ("hola caracola", cadastreActive)
     const {
      placeholderPlaces,
      placeholderCadastre,
      placesOn,
      cadastreOn,
      configPlaces,
      configCadastre,
    } = this.props;
    // const { error } = this.state;
    return (
      <div style={SearchBox}>
        <div style={imputIconsBox}>
          {((this.state.placesActive && placesOn) || (!cadastreOn)) && <Places
            placeholder={placeholderPlaces}
            config={configPlaces}
            onChangeHandler={this.onChangeHandler}
          />}
          {((this.state.cadastreActive && cadastreOn) || (!placesOn && cadastreOn)) && <Cadastre
            placeholder={placeholderCadastre}
            config={configCadastre}
            onChangeCadastre={this.onChangeCadastre}
          />}
          <IconInput
            statusPlaces={placesOn}
            statusCadastre={cadastreOn}
            placesActive={this.state.placesActive}
            cadastreActive={this.state.cadastreActive}
            onClickHandlerPlaces={this.onClickHandlerPlaces}
            onClickHandlerCadastre={this.onClickHandlerCadastre}
          />
        </div>
        <SearchButton
          config={configCadastre}
          onSubmitHandler={this.onSubmitHandler}
          lat={this.state.lat}
          lng={this.state.lng}
        />
        {(this.state.error.length > 1) &&
          <Modal
            // error={this.state.error}
            placesStatus={this.state.placesActive}
            cadastreStatus={this.state.cadastreActive}
            modalStatus={this.state.modalIsOpen}
            onCloseModal={this.onCloseModal}
          />}
      </div>
    );
  }
}

UdaSearchBox.propTypes = {
  placesActive: propTypes.bool,
  cadastreActive: propTypes.bool,
  lat: propTypes.number,
  lng: propTypes.number,
  token: propTypes.string
};


export default UdaSearchBox;
