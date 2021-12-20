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
