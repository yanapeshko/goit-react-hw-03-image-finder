import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import InfiniteScrl from './InfiniteScroll';
import s from './ImageDataView.module.css';

export default function ImageDataView({ imagesArray, openModal, loadMore }) {
  return (
    <div className={s.box}>
      <ul className={s.gallery}>
        {imagesArray.map(({ id, webformatURL, largeImageURL, tags }) => (
          <li key={id} className={s.galleryItem}>
            <ImageGalleryItem
              smallImg={webformatURL}
              largeImg={largeImageURL}
              alt={tags}
              openModal={openModal}
            />
          </li>
        ))}
      </ul>
      <InfiniteScrl imagesArray={imagesArray} loadMore={loadMore} />
    </div>
  );
}

ImageDataView.propTypes = {
  imagesArray: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
  loadMore: PropTypes.func.isRequired,
};
