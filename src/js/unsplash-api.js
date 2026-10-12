import axios from 'axios';

axios.defaults.baseURL = 'https://api.unsplash.com';

export const getPhotosByQuery = async searchedQuery => {
  const requestParams = {
    query: searchedQuery,
    color: 'black_and_white',
    orientation: 'portrait',
    client_id: 'q1FZ3G3lUf_2UuiXCVry3Fo9yR8N-uicMlLcML8Lwj4',
  };

  const response = await axios.get('/search/photos', { params: requestParams });

  return response.data;
};
