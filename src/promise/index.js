const promise = new Promise((resolve, reject) => {
  resolve('hey!')
});

const cows = 5;

const countCows = new Promise((resolve, reject) => {
  if (cows > 10) {
    resolve(`We have ${cows} cows on the farm!`);
  } else {
    reject('We have less than 10 cows on the farm!');
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error);
}).finally(() => { console.log('We are done!'); });