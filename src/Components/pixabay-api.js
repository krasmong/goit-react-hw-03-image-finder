// const API_KEY = '20088876-edd75f8533b68545bbbb19f9a';
// const BASE_URL = 'https://pixabay.com/api/';

// function fetchImages(requestKey, page) {
//   const url = `${BASE_URL}?q=${requestKey}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
//   return fetch(url).then(response => {
//     if (response.ok) {
//       return response.json();
//     }
//     return Promise.reject(
//       new Error('No response from server'),
//     );
//   });
// }

// const api = { fetchImages };

// export default api;

function fetchImages(name, page) {
  const KEY = '19029120-3d5d472043b9b4c189da88885';

  return fetch(
    `https://pixabay.com/api/?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  ).then(response => {
    if (response.ok) {
      return response.json();
    }

    return Promise.reject(new Error('Ошибка'));
  });
}

const api = { fetchImages };

export default api;
