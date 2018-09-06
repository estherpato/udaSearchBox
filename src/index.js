import React from 'react';
import ReactDOM from 'react-dom';
import UdaSearchBox from './components/UdaSearchBox.js';

//escribir en el readme cuales están marcadas por defecto

const configUdaSearchBox = {
    placeholderPlaces: '',
    placeholderCadastre: '',
    placesOn: true,
    cadastreOn: true,

    configPlaces: {
      apiKey: '36284ef6c57222d4fea2accf5880409',
      appId: 'Z70M152WQR',
      aroundLatLng: null,
      aroundRadius: null,
      countries: ['sp'],
      disabled: false,
      language: navigator.language,
      onChange: false,
      onSuggestions: null,
      onClear: null,
      templates: null,
      type: ['city', 'country', 'address', 'busStop', 'trainStation', 'townhall', 'airport'],
      useDeviceLocation: false,
    },

    configCadastre: {}
}

ReactDOM.render(<UdaSearchBox config={configUdaSearchBox}/>, document.getElementById('root'));
