import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import s from './App.module.css';

import Searchbar from './Components/Searchbar/Searchbar';
import RenderGallery from './Components/RenderGallery';

class App extends Component {
  state = {
    image: '',
  };

  handleFormSubmit = image => {
    this.setState({ image });
  };

  render() {
    return (
      <div className={s.App}>
        <Searchbar getImg={this.handleFormSubmit} />
        <RenderGallery imgItem={this.state.image} />

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
