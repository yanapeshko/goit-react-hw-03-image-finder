// import URL from './settings';

// export default async function fetchArticles(imageRequest, page) {
//   const url = `${URL.BASE_URL}/?image_type=${URL.IMAGE_TYPE}&orientation=${URL.ORIENTATION}&q=${imageRequest}&page=${page}&per_page=${URL.QUANTITY_PER_PAGE}&key=${URL.KEY}`;

//   const response = await fetch(url);
//   const res = await response.json();
//   return await res.hits;
// }

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
axios.defaults.params = {
  key: '24048066-a9af356d7e5c6815eb6be670e',
  image_type: 'photo',
  orientation: 'horizontal',
};

export default async function fetchArticles(imageRequest, page) {
  try {
    const { data } = await axios.get('', { params: { q: imageRequest, page } });
    return data;
  } catch (e) {
    console.error(e);
  }
}
