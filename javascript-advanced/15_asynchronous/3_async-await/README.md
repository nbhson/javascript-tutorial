# async/await

Từ khóa `async` cung cấp cho bạn một cách đơn giản hơn để làm việc với mã dựa trên lời hứa không đồng bộ. Thêm `async` vào đầu một hàm làm cho nó trở thành một hàm không đồng bộ:

```js
async function myFunction() {
  // This is an async function
}
```

Bên trong một hàm không đồng bộ, bạn có thể sử dụng từ khóa `await` trước một lệnh gọi hàm trả về một lời hứa. 
> Điều này làm cho mã chờ tại thời điểm đó cho đến khi lời hứa được giải quyết, tại thời điểm đó giá trị được thực hiện của lời hứa được coi là giá trị trả về hoặc giá trị bị từ chối được ném ra.

```js
async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch('https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json');
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  }
  catch(error) {
    console.error(`Could not get products: ${error}`);
  }
}
```
> Ngoài ra, lưu ý rằng bạn chỉ có thể sử dụng hàm await bên trong một hàm không đồng bộ