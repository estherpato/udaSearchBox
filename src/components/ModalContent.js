import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalContent extends Component {
  render() {
    const {placesStatus,
      cadastreStatus,
      modalStatus} = this.props;

    return (
      // if (placesStatus) {
      //   <div>
      //     Address "{}" was not found.Instead using default address
      //   </div>);
    // } else if (cadastreStatus) {
      <div>
        {/* Not a valid cadastral reference */}
      </div>
    // }
  )

  }
}

export default ModalContent;
