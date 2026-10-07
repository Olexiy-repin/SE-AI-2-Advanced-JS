export const getPhotosByQuery = searchedQuery => {
  const requestParams = new URLSearchParams({
    query: searchedQuery,
    color: 'black_and_white',
    orientation: 'portrait',
    client_id: 'q1FZ3G3lUf_2UuiXCVry3Fo9yR8N-uicMlLcML8Lwj4',
  });

  return fetch(`https://api.unsplash.com/search/photos?${requestParams}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
};
