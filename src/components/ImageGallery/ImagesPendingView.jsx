import Loader from 'react-loader-spinner';
import s from './ImageGallery.module.css';

export default function ImagesDataView() {
  return (
    <div className={s.loader}>
      <Loader type="Puff" color="#3f51b5" height={500} width={500} />
    </div>
  );
}
