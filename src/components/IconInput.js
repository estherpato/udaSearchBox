import React, { Component } from 'react';
import MapIcon from '../images/map.png';
import MapSelectIcon from '../images/map_select.png';
import PlaceIcon from '../images/place.png';
import PlaceSelectIcon from '../images/place_select.png';
import { IconsBox, mapIconBox, placeIconBox } from '../stylesheets/stylesSearchBox';
import PropTypes from 'prop-types';


class IconInput extends Component {
    render() {
        const {
            statusPlaces,
            statusCadastre,
            placesActive,
            cadastreActive,
            onClickHandlerPlaces,
            onClickHandlerCadastre,
        } = this.props

        let placesImage;
        let cadastreImage;

        if (placesActive) {
            placesImage = PlaceSelectIcon
            cadastreImage = MapIcon
        } else {
            placesImage = PlaceIcon
            cadastreImage = MapSelectIcon
        }

        if (statusPlaces && statusCadastre) {
            return (
                <div style={IconsBox}>
                    <img
                        style={placeIconBox}
                        src={placesImage}
                        alt="Place icon"
                        onClick={onClickHandlerPlaces}
                    />
                    <img
                        style={mapIconBox}
                        src={cadastreImage}
                        alt="Place icon"
                        onClick={onClickHandlerCadastre}
                    />
                </div>
            );
        } else if (statusPlaces) {
            return (
                <div style={IconsBox}>
                    <img
                        style={mapIconBox}
                        src={PlaceSelectIcon}
                        alt="Place icon"
                    />
                </div>
            );
        } else if (statusCadastre) {
            return (
                <div style={IconsBox}>
                    <img
                        style={mapIconBox}
                        src={MapSelectIcon}
                        alt="Place icon"
                    />
                </div>
            );
        } else {
            return null;
        }
    }
}

IconInput.propTypes = {
    statusPlaces: PropTypes.bool,
    statusCadastre: PropTypes.bool,
    placesActive: PropTypes.bool,
    cadastreActive: PropTypes.bool,
    onClickHandlerPlaces: PropTypes.func.isRequired,
    onClickHandlerCadastre: PropTypes.func.isRequired,
}

export default IconInput;