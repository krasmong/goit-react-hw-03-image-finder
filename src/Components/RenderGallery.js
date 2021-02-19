// import { Component } from 'react';
// import PropTypes from 'prop-types';
// import ImageGallery from './ImageGallery/ImageGallery';
// import imgAPI from './pixabay-api';
// import Loader from './Loader/Loader';
// import StatusError from './StatusError';
// import Button from './Button/Button';

// export default class RenderGallery extends Component {
//   state = {
//     images: [],
//     error: null,
//     status: 'idle',
//     page: 1,
//   };

//   static propTypes = {
//     imageName: PropTypes.string,
//   };

//   componentDidUpdate(prevProps, prevState) {
//     const prevImg = prevProps.imgItem;
//     const nextImg = this.props.imgItem;
//     const prevPage = prevState.page;
//     const nextPage = this.state.page;
//     console.log(nextPage);

//     if (prevImg !== nextImg) {
//       this.setState({ page: 1 });
//     }

//     if (prevImg !== nextImg || prevPage !== nextPage) {
//       this.setState({ status: 'pending' });

//       imgAPI
//         .fetchImages(nextImg, nextPage)
//         .then(images =>
//           this.setState({
//             images: [...prevState.images, ...images.hits],
//             status: 'resolved',
//           }),
//         )
//         .catch(error =>
//           this.setState({ error, status: 'rejected' }),
//         );
//     }
//   }

//   onClickLoadMoreBtn = () => {
//     this.setState(prevState => ({
//       page: prevState.page + 1,
//     }));
//   };

//   render() {
//     const { error, status, images } = this.state;

//     if (status === 'idle') {
//       return (
//         <p style={{ textAlign: 'center' }}>
//           Давай что-то найдем
//         </p>
//       );
//     }

//     if (status === 'pending') {
//       return <Loader />;
//     }

//     if (status === 'rejected') {
//       return <StatusError message={error.message} />;
//     }

//     if (status === 'resolved') {
//       return (
//         <>
//           <ImageGallery images={images} />
//           <Button onClick={this.onClickLoadMoreBtn} />
//         </>
//       );
//     }
//   }
// }

import { Component } from 'react';
import PropTypes from 'prop-types';
import ImageGallery from './ImageGallery/ImageGallery';
import imgAPI from './pixabay-api';
import Loader from './Loader/Loader';
import StatusError from './StatusError';
import Button from './Button/Button';

export default class RenderGallery extends Component {
  state = {
    images: [],
    error: null,
    status: 'idle',
    page: 1,
  };

  static propTypes = {
    imageName: PropTypes.string,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevImg = prevProps.imgItem;
    const nextImg = this.props.imgItem;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    console.log(prevImg);
    console.log(nextImg);

    // console.log(prevPage);
    // console.log(nextPage);
    // console.log(prevState.images);
    // console.log(this.state.images);

    if (prevImg !== nextImg) {
      this.setState({ page: 1 });
      this.setState((prevState.images = []));
    }

    if (prevImg !== nextImg || prevPage !== nextPage) {
      this.setState({ status: 'pending' });

      imgAPI
        .fetchImages(nextImg, nextPage)
        .then(images =>
          this.setState({
            images: [...prevState.images, ...images.hits],
            status: 'resolved',
          }),
        )
        .catch(error =>
          this.setState({ error, status: 'rejected' }),
        );
    }
  }

  onClickLoadMoreBtn = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { error, status, images } = this.state;

    if (status === 'idle') {
      return (
        <p style={{ textAlign: 'center' }}>
          Давай что-то найдем
        </p>
      );
    }

    if (status === 'pending') {
      return <Loader />;
    }

    if (status === 'rejected') {
      return <StatusError message={error.message} />;
    }

    if (status === 'resolved') {
      return (
        <>
          <ImageGallery images={images} />
          <Button onClick={this.onClickLoadMoreBtn} />
        </>
      );
    }
  }
}
