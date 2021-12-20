import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ image, tags, largeImage, toClick }) => {
  return (
    <img
      src={image}
      alt={tags}
      onClick={() => toClick(largeImage)}
      className={s.image}
    />
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  toClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
