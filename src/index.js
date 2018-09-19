import React from 'react';
import ReactDOM from 'react-dom';
import UdaSearchBox from './components/UdaSearchBox.js';
import './stylesheets/fonts/fonts.css';
//escribir en el readme cuales están marcadas por defecto

const configUdaSearchBox = {
  placeholderPlaces: 'Add an address',
  placeholderCadastre: 'Add a cadastral referency',
  placesOn: true, //botón clickado
  cadastreOn: true, //botón clickado
  onSubmit: null,

  configPlaces: {
    apiKey: '36284ef6c57222d4fea2accf5880409',
    appId: 'Z70M152WQR',
    aroundLatLng: null,
    aroundRadius: null,
    countries: ['sp'],
    disabled: "false", // llamada activa o no
    language: navigator.language,
    onChange: false,
    onSuggestions: null,
    onClear: null,
    templates: null,
    type: ['city', 'country', 'address', 'busStop', 'trainStation', 'townhall', 'airport'],
    useDeviceLocation: "false",
  },

  configCadastre: {
    onChange: false,
  }
}

const showCoordinates =
  (lat,lon) => {
    console.log(lat);
    console.log(lon);
  }


ReactDOM.render(<UdaSearchBox
  showCoordinates={showCoordinates}
  placeholderPlaces={configUdaSearchBox.placeholderPlaces}
  placeholderCadastre={configUdaSearchBox.placeholderCadastre}
  placesOn={configUdaSearchBox.placesOn}
  cadastreOn={configUdaSearchBox.cadastreOn}
  onSubmit={configUdaSearchBox.onSubmit}
  style={configUdaSearchBox.style}
  configPlaces={configUdaSearchBox.configPlaces}
  configCadastre={configUdaSearchBox.configCadastre}
/>, document.getElementById('root'));
