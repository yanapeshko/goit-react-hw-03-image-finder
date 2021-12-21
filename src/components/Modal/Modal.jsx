import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import { GrClose } from 'react-icons/gr';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = evt => {
    if (evt.code === 'Escape') {
      this.props.onClose();
    }
  };

  onBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props.modalImg;
    return createPortal(
      <div className={s.overlay} onClick={this.onBackdropClick}>
        <button
          type="button"
          className={s.buttonClose}
          onClick={() => this.props.onClose()}
        >
          <GrClose style={{ color: 'white', width: 30, height: 30 }} />
        </button>
        <div className={s.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  modalImg: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};
