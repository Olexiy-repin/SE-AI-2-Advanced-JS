/*
 * Використовуємо бібліотеку https://axios-http.com/
 */
import axios from 'axios';

axios
  .get('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    console.log(response);

    console.log(response.data);
  })
  .catch(err => {
    console.dir(err);
  });
