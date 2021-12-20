import { Component } from 'react';
import PropTypes from 'prop-types';
import fetchArticles from '../../services/apiService';
import ImagesIdleView from './ImagesIdleView';
import ImagesPendingView from './ImagesPendingView';
import ImagesErrorView from './ImagesErrorView';
import ImagesDataView from './ImagesDataView';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    error: null,
    status: Status.IDLE,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageRequest;
    const prevPage = prevState.page;
    const nextName = this.props.imageRequest;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ images: [], page: 1, status: Status.PENDING });

      setTimeout(() => {
        fetchArticles(nextName, this.state.page)
          .then(images => this.setState({ images, status: Status.RESOLVED }))
          .catch(error => this.setState({ error, status: Status.REJECTED }));
      }, 0);
    }

    if (prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });
      try {
        const images = await fetchArticles(prevName, this.state.page);

        this.setState({
          images: [...prevState.images, ...images],
          status: Status.RESOLVED,
        });
        document
          .getElementById('btn')
          .scrollIntoView({ block: 'center', behavior: 'smooth' });

        this.setState({
          images: [...prevState.images, ...images],
          status: Status.RESOLVED,
        });
      } catch (e) {
        this.setState({ e, status: Status.REJECTED });
      }
    }
  }

  addImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, error, status } = this.state;

    return (
      <>
        {status === 'idle' && <ImagesIdleView />}
        {status === 'rejected' && <ImagesErrorView message={error.message} />}
        {status === 'pending' && <ImagesPendingView />}
        {status === 'resolved' && (
          <ImagesDataView
            images={images}
            toClick={this.props.toClick}
            forClick={this.addImages}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  imageRequest: PropTypes.string.isRequired,
  toClick: PropTypes.func.isRequired,
};

export default ImageGallery;
