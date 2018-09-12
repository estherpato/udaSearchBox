import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ModalContent extends Component {
    render() {
        const { placesStatus, cadastreStatus
        } = this.props

if (placesStatus) {
    return (
        <div>
            Address "{}" was not found. Instead using default address.
        </div>
    );
} else if (cadastreStatus) {
    return (    <div>
        Not a valid cadastral reference.
    </div>)
} else {
    return null
}
      }
}



export default ModalContent;