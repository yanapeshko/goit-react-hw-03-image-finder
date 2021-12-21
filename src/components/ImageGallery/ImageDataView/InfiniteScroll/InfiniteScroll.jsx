import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function InfiniteScrl({ imagesArray, loadMore }) {
  return (
    <InfiniteScroll
      dataLength={imagesArray.length}
      next={loadMore}
      hasMore={true}
    />
  );
}

InfiniteScrl.propTypes = {
  imagesArray: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
};
