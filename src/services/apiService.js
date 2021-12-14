import URL from './settings';

export default async function fetchArticles(imageRequest, page) {
  const url = `${URL.BASE_URL}/?image_type=${URL.IMAGE_TYPE}&orientation=${URL.ORIENTATION}&q=${imageRequest}&page=${page}&per_page=${URL.QUANTITY_PER_PAGE}&key=${URL.KEY}`;

  const response = await fetch(url);
  const res = await response.json();
  return await res.hits;
}
