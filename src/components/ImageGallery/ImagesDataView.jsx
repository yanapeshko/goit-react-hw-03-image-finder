import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import Button from '../Button';
import s from './ImageGallery.module.css';

export default function ImagesDataView({ images, toClick, forClick }) {
  return (
    <div className={s.box}>
      <ul className={s.gallery}>
        {images.map(({ webformatURL, largeImageURL, tags }) => (
          <li key={webformatURL} className={s.item}>
            <ImageGalleryItem
              image={webformatURL}
              tags={tags}
              largeImage={largeImageURL}
              toClick={toClick}
            />
          </li>
        ))}
      </ul>
      <Button type="button" onClick={forClick}>
        Load more
      </Button>
    </div>
  );
}

ImagesDataView.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    }),
  ),
  toClick: PropTypes.func.isRequired,
  forClick: PropTypes.func.isRequired,
};
