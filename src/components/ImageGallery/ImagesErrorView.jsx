import PropTypes from 'prop-types';
import errorImage from './error.png';
import s from './ImageGallery.module.css';

export default function ImagesErrorView({ message }) {
  return (
    <div role="alert" className={s.loader}>
      <img src={errorImage} alt="Error" />
      <p>{message}</p>
    </div>
  );
}

ImagesErrorView.defaultProps = {
  message: '',
};

ImagesErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};
