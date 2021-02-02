import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createPortal } from 'react-dom';
import s from '../Modal/Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export default class Modal extends Component {
  componentDidMount() {
    console.log('Modal componentDidMount');

    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    console.log('Modal componentWillUnmount');

    window.removeEventListener(
      'keydown',
      this.handleKeyDown,
    );
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      console.log('нажали ECSб закрываем модалку ');
      this.props.onClose();
    }
  };

  handleBackdropClick = e => {
    console.log('Клик в бекдроп');
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    const { src, alt } = this.props;

    return createPortal(
      <div
        className={s.Overlay}
        onClick={this.handleBackdropClick}
      >
        <div className={s.Modal}>
          <img src={src} alt={alt} />
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};
