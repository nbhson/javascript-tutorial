# Promise

> Promises are the foundation of asynchronous programming in modern JavaScript.

Promises là một đối tượng được trả về bởi một hàm không đồng bộ, nó đại diện cho trạng thái hiện tại của hoạt động.

First, a promise can be in one of three states:

## Promise terminology / Thuật ngữ

- `pending`: the promise has been created và chức năng không đồng bộ mà nó được liên kết vẫn chưa thành công hoặc không thành công
- `fulfilled`: the asynchronous function has succeeded. When a promise is fulfilled, its `then()` handler is called.
- `rejected`: the asynchronous function has failed. When a promise is rejected, its `catch()` handler is called.

## Catching errors (.catch)

```js
const fetchPromise = fetch('bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');

fetchPromise
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( data => {
    console.log(data[0].name);
  })
  .catch( error => {
    console.error(`Could not get products: ${error}`);
  });
```

## Combining multiple promises (.all)

```js
const fetchPromise1 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
const fetchPromise2 = fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found');
const fetchPromise3 = fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json');

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then( responses => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch( error => {
    console.error(`Failed to fetch: ${error}`)
  });
```