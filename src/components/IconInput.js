import React, { Component } from 'react';
import MapIcon from '../images/map.png';
import MapSelectIcon from '../images/map_select.png';
import PlaceIcon from '../images/place.png';
import PlaceSelectIcon from '../images/place_select.png';

class IconInput extends Component {
    render() {
        return (
            <div>
                <img
                    src={PlaceIcon}
                    alt="Place icon"
                />
            </div>
        );
    }
}

export default IconInput;