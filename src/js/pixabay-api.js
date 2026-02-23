import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '54657823-2f0cb049819a58dcbd4ca359d';
const PER_PAGE = 15;

export async function getImagesByQuery(query, page = 1) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  const response = await axios.get('', { params });
  return response.data;
}

export { PER_PAGE };