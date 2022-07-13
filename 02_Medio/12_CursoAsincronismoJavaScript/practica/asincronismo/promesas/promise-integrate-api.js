import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) { //ya es una promesa por eso no usamas la palabra reservada Promise
  return fetch(urlApi);
};


//llamado simple 
// fetchData(`${API}/products`)
//   .then(response => response.json())
//   .then(products => {
//     console.log(products);
//   })
//   .then(() => {
//     console.log('hola')
//   })
//   .catch(error => console.log(error));


//Multiples lamados 
fetchData(`${API}/products`)
  .then(response => response.json())
  .then(products => {
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`)
  })
  .then(response => response.json())
  .then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(err => console.log(err))
  .finally(() => console.log('Finally'));