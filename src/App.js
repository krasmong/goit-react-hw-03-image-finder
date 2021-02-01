import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';

import Searchbar from './Components/Searchbar/Searchbar';
import ImageGallery from './Components/ImageGallery/ImageGallery';

// import Modal from './Components/Modal';

class App extends Component {
  state = {
    image: '',
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar getImg={this.handleFormSubmit} />
        <ImageGallery images={this.state.images} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
