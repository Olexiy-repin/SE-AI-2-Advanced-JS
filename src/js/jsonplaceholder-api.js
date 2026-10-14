import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

export const getPosts = async currentPage => {
  const requestParams = {
    _page: currentPage,
    _limit: 10,
  };

  const response = await axios.get('/posts', { params: requestParams });

  return response.data;
};
