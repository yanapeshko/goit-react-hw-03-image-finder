import axios from 'axios';
import { toast } from 'react-toastify';

const getImages = axios.create({
  baseURL: 'https://pixabay.com/api/',
  timeout: 1000,

  params: {
    key: '24048066-a9af356d7e5c6815eb6be670e',
    per_page: 12,
    image_type: 'photo',
    orientation: 'horizontal',
  },
});

export async function fetchArticles(q, page) {
  try {
    const { data } = await getImages('', { params: { q, page } });
    return data;
  } catch (error) {
    toast.error(`No images like ${q}`);
  }
}
