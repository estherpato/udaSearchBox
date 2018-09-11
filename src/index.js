import React from 'react';
import ReactDOM from 'react-dom';
import UdaSearchBox from './components/UdaSearchBox.js';

//escribir en el readme cuales están marcadas por defecto

const configUdaSearchBox = {
  placeholderPlaces: '',
  placeholderCadastre: '',
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
    style: false,
  },

  configCadastre: {}
}

ReactDOM.render(<UdaSearchBox config={configUdaSearchBox} />, document.getElementById('root'));
