import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { modalSecction, spanFonts, buttonClose } from '../stylesheets/StylesSearchBox';

class PopUp extends Component {
    render() {
        const { placesStatus, cadastreStatus, popUpStatus, onClosePopUp,
        } = this.props;

        if (placesStatus && popUpStatus) {
            return (
                <section style={modalSecction}>
                    <div style={modalSecction}>
                        <span
                            style={spanFonts}
                        >
                            Address was not found
                        </span>
                        <button
                            style={buttonClose}
                            onClick={onClosePopUp}
                        >
                            ✖
                        </button>
                    </div>
                </section>
            );
        } else if (cadastreStatus && popUpStatus) {
            return (
                <section style={modalSecction}>
                    <div style={modalSecction}>
                        <span
                            style={spanFonts}
                        >
                            Cadastral reference is not valid
                        </span>
                        <button
                            style={buttonClose}
                            onClick={onClosePopUp}
                        >
                            ✖
                        </button>
                    </div>
                </section>
            );
        }
    }
}

export default PopUp;
