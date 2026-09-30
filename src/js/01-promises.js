/*
 * Створення та обробка промісу
 * - Клас Promise
 * - resolve
 * - reject
 * - then, catch, finally
 */

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const isSuccess = Math.random() > 0.5;

//     if (isSuccess) {
//       resolve('Done!');
//     } else {
//       reject('Error!');
//     }
//   }, 1000);
// });

// console.log('promise =', promise);

/*
 * Ланцюжки промісів
 * - декілька послідовних then
 * - then повертає проміс
 */
// promise
//   .then(result => {
//     console.log('Result from first then =', result);

//     return 'Hello world!';
//   })
//   .then(result => {
//     console.log('Result from second then =', result);
//   })
//   .catch(err => {
//     console.log('err =', err);
//   })
//   .finally(() => {
//     console.log('Hello from finally!');
//   });

//TODO: Що буде виведено у консолі
// const promise = new Promise((resolve, reject) => {
//   resolve('1');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   });

//TODO: Що буде виведено у консолі
// const promise = new Promise((resolve, reject) => {
//   reject('error');
// });

// promise
//   .then(data => {
//     console.log(data);
//   })
//   .then(data => {
//     console.log(data);

//     return '2';
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
