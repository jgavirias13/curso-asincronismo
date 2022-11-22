const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;

const API = 'https://api.escuelajs.co/api/v1';

function fetchData(urlApi, callback) {
  let xHttp = new XMLHttpRequest();

  xHttp.open('GET', urlApi, true);
  xHttp.onreadystatechange = function (event) {
    if (xHttp.readyState === 4) { //State 4
      if (xHttp.status === 200) {
        callback(null, JSON.parse(xHttp.responseText));
      } else {
        const error = new Error('Error ' + urlApi);
        return callback(error, null);
      }
    }
  }

  xHttp.send();
}

fetchData(`${API}/products`, (error, data) => {
  if (error) return console.error(error);
  fetchData(`${API}/products/${data[0].id}`, (error1, data1) => {
    if (error1) return console.error(error1);
    fetchData(`${API}/categories/${data1?.category?.id}`, (error2, data2) => {
      if (error2) return console.error(error2);
      console.log(data2);
    });
  });
});
