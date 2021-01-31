import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './Components/Searchbar/Searchbar';

// import Modal from './Components/Modal';

// import s from './App.module.css';

class App extends Component {
  state = {
    image: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  handleFormSubmit = image => {
    this.setState({ image });
  };

  render() {
    const { showModal } = this.state;
    return (
      <div>
        <Searchbar getImg={this.handleFormSubmit} />
        {/* {showModal && (
          <Modal onClose={this.toggleModal}>
            <h1> Это контент модалки Children</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              maxime eaque repudiandae recusandae consectetur iste deleniti!
              Perferendis reprehenderit ipsum soluta!
            </p>
          </Modal>
        )} */}

        <ToastContainer autoClose={3000} />
      </div>
    );
  }
}

export default App;
