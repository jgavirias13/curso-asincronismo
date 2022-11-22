const fnAsync = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello world');
    }, 2000);
  });
}

const anotherFn = async () => {
  const result = await fnAsync();
  console.log(result);
}

console.log('before');
anotherFn();
console.log('after');