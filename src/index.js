import React from 'react';
import ReactDOM from 'react-dom';
import UdaSearchBox from './components/UdaSearchBox.js';

//escribir en el readme cuales están marcadas por defecto

const configUdaSearchBox = {
    placeholderPlaces: '',
    placeholderCadastre: '',
    placesOn: true,
    cadastreOn: true,

    configPlaces: {},

    configCadastre: {}
}

ReactDOM.render(<UdaSearchBox congif={configUdaSearchBox}/>, document.getElementById('root'));
