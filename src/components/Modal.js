            import React, { Component } from 'react';
            import PropTypes from 'prop-types';


            class Modal extends Component {

                render() {
                    const {
                        onCloseModal
                    } = this.props;

                    return (
                      <section>
                            <div>
                                <button
                                    onClick={onCloseModal}
                                >
                                ✖
                                </button>

                            </div>
                    </section>
                    );
                }
            }















            export default Modal;
