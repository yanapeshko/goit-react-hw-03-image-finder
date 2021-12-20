import pendingImage from './pending-image.png';

export default function ImagesIdleView() {
  return (
    <div role="alert">
      <img src={pendingImage} alt="Pixabay" />
    </div>
  );
}
