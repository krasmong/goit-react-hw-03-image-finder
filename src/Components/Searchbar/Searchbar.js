import { Component } from 'react';
import PropTypes from 'prop-types';
import { BiSearchAlt } from 'react-icons/bi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import s from '../Searchbar/Searchbar.module.css';

export default class Searchbar extends Component {
  state = {
    image: '',
  };

  //получение значения input
  handleNameChange = e => {
    this.setState({ image: e.currentTarget.value.toLowerCase() });
  };

  //отправка значения из формы
  handleSubmit = e => {
    e.preventDefault();

    if (this.state.image.trim() === '') {
      toast.warn('Заполните форму поиска');
      return;
    }

    this.props.getImg(this.state.image);
    this.setState({ image: '' });
  };

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            <BiSearchAlt style={{ marginRight: 8 }} />
          </button>

          <input
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.image}
            onChange={this.handleNameChange}
          />
        </form>
      </header>
    );
  }
}
