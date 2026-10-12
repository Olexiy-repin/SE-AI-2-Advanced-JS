/*
 * Синтаксис async/await
 * try...catch
 */

// const fn = async () => {
//   try {
//     const promise = new Promise((resolve, reject) => {
//       reject('My Error!');
//     });

//     console.log(promise);

//     const result = await promise;

//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };

// fn();

//TODO: Запит за постами і обробка відповіді через async/await
// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// };

// const logPosts = async () => {
//   try {
//     const posts = await fetchPosts();

//     console.log(posts);
//   } catch (err) {
//     console.dir(err);
//   }
// };

// logPosts();

//TODO: Запит за постами і обробка відповіді через async/await та then()/catch()
// const fetchPosts = async () => {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');

//   if (!response.ok) {
//     throw new Error(response.status);
//   }

//   return response.json();
// };

// fetchPosts()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
