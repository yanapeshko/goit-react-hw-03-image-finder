import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import ImageDataView from './ImageDataView';
import ImagePending from './ImagePending';
import { fetchArticles } from '../../services/serviceApi';
import s from './ImageGallery.module.css';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export default class ImageGallery extends Component {
  state = {
    imagesArray: [],
    page: 1,
    status: Status.IDLE,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevName !== nextName) {
      this.setState({ imagesArray: [] });
    }

    if (prevName !== nextName || prevPage !== nextPage) {
      this.setState({ status: Status.PENDING });

      fetchArticles(nextName, nextPage).then(
        ({ hits: newImagesArray, totalHits: totalImages }) => {
          if (newImagesArray.length === 0 && totalImages === 0) {
            toast.error('Nothing found');
            return;
          }
          if (newImagesArray.length === 0 && totalImages !== 0) {
            toast.warning('Nothing more found');
            return;
          }
          if (nextPage === 1) {
            toast.success(`Found ${totalImages} images`);
          }

          this.setState(({ imagesArray }) => ({
            imagesArray: [...imagesArray, ...newImagesArray],
            status: Status.RESOLVED,
          }));
        },
      );
    }
  }

  updatePage = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  render() {
    const { imagesArray, status } = this.state;
    const { openModal } = this.props;

    return (
      <>
        {status === 'idle' && (
          <h2 className={s.enterData}>Enter data to search...</h2>
        )}

        {status === 'pending' && <ImagePending />}

        {(status === 'resolved' || status === 'pending') && (
          <ImageDataView
            imagesArray={imagesArray}
            openModal={openModal}
            loadMore={this.updatePage}
          />
        )}

        {status === 'rejected' && toast.error('Ooops')}
      </>
    );
  }
}

ImageGallery.propTypes = {
  imageName: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};
