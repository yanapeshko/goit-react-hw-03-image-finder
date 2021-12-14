import { Component } from 'react';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import s from './SearchForm.module.css';

class SearchForm extends Component {
  state = {
    imageRequest: '',
  };

  handleRequestChange = e => {
    this.setState({ imageRequest: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.imageRequest.trim() === '') {
      toast.error(
        'Check the correctness of the entered data, images of this category do not exist!',
      );
      this.setState({ imageRequest: '' });
      return;
    }

    this.props.forSubmit(this.state.imageRequest.trim());
    this.setState({ imageRequest: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={s.form}>
        <button type="submit" className={s.btn}>
          <span className={s.btn_label}>Search</span>
        </button>

        <input
          className={s.input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.imageRequest}
          onChange={this.handleRequestChange}
        />
      </form>
    );
  }
}

SearchForm.defaultProps = {
  forSubmit: () => null,
};

SearchForm.propTypes = {
  forSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
