import React, { Component } from 'react';
import Modal from './Components/Modal';

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
        {showModal && (
          <Modal>
            <h1> Это контент модалки Children</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              maxime eaque repudiandae recusandae consectetur iste deleniti!
              Perferendis reprehenderit ipsum soluta!
            </p>
          </Modal>
        )}
      </div>
    );
  }
}

export default App;
