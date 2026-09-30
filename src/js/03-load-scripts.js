// https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js
// https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js
// https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js

/*
 * Завантаження скриптів
 */
//TODO: Рішення через колбеки
// const loadScript = (url, onSuccess, onError) => {
//   const scriptEl = document.createElement('script');

//   scriptEl.src = url;

//   scriptEl.addEventListener('load', event => {
//     onSuccess(`${url} завантажено успішно!`);
//   });

//   scriptEl.addEventListener('error', event => {
//     onError(`${url} не завантажено!`);
//   });

//   document.head.append(scriptEl);
// };

// loadScript(
//   'https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js',
//   message => {
//     console.log(message);

//     loadScript(
//       'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js',
//       message => {
//         console.log(message);

//         loadScript(
//           'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js',
//           message => {
//             console.log(message);
//           },
//           errMessage => {
//             console.log(errMessage);
//           }
//         );
//       },
//       errMessage => {
//         console.log(errMessage);
//       }
//     );
//   },
//   errMessage => {
//     console.log(errMessage);
//   }
// );

//TODO: Рішення через проміси
const loadScript = url => {
  return new Promise((res, rej) => {
    const scriptEl = document.createElement('script');

    scriptEl.src = url;

    scriptEl.addEventListener('load', event => {
      res(`${url} завантажено успішно!`);
    });

    scriptEl.addEventListener('error', event => {
      rej(`${url} не завантажено!`);
    });

    document.head.append(scriptEl);
  });
};

loadScript('https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js')
  .then(message => {
    console.log(message);

    return loadScript(
      'https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js'
    );
  })
  .then(message => {
    console.log(message);

    return loadScript(
      'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
    );
  })
  .then(message => {
    console.log(message);
  })
  .catch(err => {
    console.log(err);
  });
