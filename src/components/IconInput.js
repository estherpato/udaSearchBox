import React, { Component } from 'react';
import MapIcon from '../images/map.png';
import MapSelectIcon from '../images/map_select.png';
import PlaceIcon from '../images/place.png';
import PlaceSelectIcon from '../images/place_select.png';
import {IconsBox, mapIconBox, placeIconBox} from './StylesSearchBox';


class IconInput extends Component {
    render() {
        const {
            statusPlaces,
            statusCadastre,
            active,
        } = this.props

        if (statusPlaces && statusCadastre) {
            return (
                <div style = {IconsBox}>
                    <img style = {placeIconBox}
                        src={PlaceSelectIcon}
                        alt="Place icon"
                    />
                    <img style = {mapIconBox}
                        src={MapIcon}
                        alt="Place icon"
                    />
                </div>
            );
        } else if (statusPlaces) {
            return (
                <div>
                    <img
                        src={PlaceSelectIcon}
                        alt="Place icon"
                    />
                </div>
            );
        } else if (statusCadastre) {
            return (
                <div>
                    <img
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

export default IconInput;