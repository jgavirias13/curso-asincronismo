import fetch from "node-fetch";

const API_URL = "https://api.escuelajs.co/api/v1";

function postData(urlApi, data) {
  const response = fetch(urlApi, {
    method: 'POST',
    mode: 'cors',
    body: JSON.stringify(data),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  return response;
}

const data = {
  'title': 'GameBoy Color',
  'price': 1000,
  'description': 'GameBoy Color Console',
  'categoryId': 1,
  'images': [
    'https://http2.mlstatic.com/D_NQ_NP_611662-MCO50140737850_052022-O.jpg',
  ]
}

postData(`${API_URL}/products`, data).then((response) => response.json()).then((data) => console.log(data));