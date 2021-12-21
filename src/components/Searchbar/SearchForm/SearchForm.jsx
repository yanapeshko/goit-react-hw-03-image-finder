import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { BiSearchAlt } from 'react-icons/bi';
import s from './SearchForm.module.css';

export default class SearchForm extends Component {
  state = {
    imageName: '',
  };

  onNameChange = evt => {
    this.setState({ imageName: evt.currentTarget.value.toLowerCase() });
  };

  onSubmit = evt => {
    evt.preventDefault();

    if (this.state.imageName.trim() === '') {
      toast.warning('Enter sth');
      return;
    }

    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
  };

  render() {
    const { imageName } = this.state;

    return (
      <form
        onSubmit={this.onSubmit}
        className={s.searchForm}
        autoComplete="off"
      >
        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images on Pixabay"
          value={imageName}
          onChange={this.onNameChange}
        />
        <button type="submit" className={s.button}>
          <BiSearchAlt className={s.searchIcon} />
        </button>
      </form>
    );
  }
}
