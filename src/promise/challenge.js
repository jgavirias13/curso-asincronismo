import fetch from "node-fetch";

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi) {
  return fetch(urlApi);
}

fetchData(`${API}/products`)
  .then((response) => response.json())
  .then(products => fetchData(`${API}/products/${products[0].id}`))
  .then((response) => response.json())
  .then(product => fetchData(`${API}/categories/${product?.category?.id}`))
  .then((response) => response.json())
  .then(category => console.log(category));