// run `node index.js` in the terminal
const fly = require('flyio');

console.log(`Hello Node.js v${process.versions.node}!`);

console.log('script start');

// 支持fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((json) => console.log(json));

setTimeout(() => {
  console.log('settimeout 0');
});

setTimeout(() => {
  console.log('settimeout 3');
}, 3);

new Promise((resolve, reject) => {
  console.log('Promise');
  setTimeout(() => {
    resolve('resolve');
  });
}).then((res) => {
  console.log('promise then');
});

const int = setInterval(() => {
  console.log('setInterval');
  clearInterval(int);
});

setImmediate(() => {
  console.log('setImmediate');
}, 10);

process.nextTick(() => {
  console.log('process.nextTick');
});

console.log('script end');
