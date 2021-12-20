import PropTypes from 'prop-types';
import SearchForm from '../SearchForm/SearchForm';
import s from './Searchbar.module.css';

export default function Searchbar({ forSubmit }) {
  return (
    <header className={s.searchbar}>
      <SearchForm forSubmit={forSubmit} />
    </header>
  );
}

Searchbar.defaultProps = {
  forSubmit: () => null,
};

Searchbar.propTypes = {
  forSubmit: PropTypes.func.isRequired,
};
