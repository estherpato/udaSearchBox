            import React, { Component } from 'react';
            import PropTypes from 'prop-types';
            import ModalContent from './ModalContent.js';

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
                                <ModalContent/>
                            </div>
                    </section>
                    );
                }
            }















            export default Modal;