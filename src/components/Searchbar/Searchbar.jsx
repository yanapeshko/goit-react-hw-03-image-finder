import React from 'react';
import PropTypes from 'prop-types';
import SearchForm from './SearchForm';
import s from './Searchbar.module.css';

export default function SearchBar({ onSubmit }) {
  return (
    <header className={s.searchbar}>
      <SearchForm onSubmit={onSubmit} />
    </header>
  );
}

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
