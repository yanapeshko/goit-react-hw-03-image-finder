import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({
  smallImg,
  largeImg,
  alt,
  openModal,
}) {
  return (
    <img
      onClick={() => openModal(largeImg, alt)}
      className={s.image}
      src={smallImg}
      alt={alt}
    />
  );
}

PropTypes.propTypes = {
  smallImg: PropTypes.string.isRequired,
  largeImg: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
