import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const getPhotosByQuery = async (searchedQuery, currentPage) => {
  const requestParams = {
    query: searchedQuery,
    color: 'black_and_white',
    orientation: 'portrait',
    page: currentPage,
    per_page: 12,
    client_id: 'q1FZ3G3lUf_2UuiXCVry3Fo9yR8N-uicMlLcML8Lwj4',
  };

  const response = await axios.get('/search/photos', { params: requestParams });

  return response.data;
};
