import React, { Component } from 'react';
import Loader from 'react-loader-spinner';
import s from './ImagePending.module.css';

export default class ImagePending extends Component {
  render() {
    return (
      <Loader
        className={s.loader}
        type="Puff"
        color="#3f51b5"
        height={500}
        width={500}
        timeout={3000}
      />
    );
  }
}
