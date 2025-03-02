# Asynchronous Programing (Bất đồng bộ)

> Bất đồng bộ là một kỹ thuật cho phép chương trình của bạn bắt đầu một tác vụ có khả năng chạy lâu và vẫn có thể đáp ứng các sự kiện khác trong khi tác vụ đó chạy, thay vì phải đợi cho đến khi tác vụ đó kết thúc. Khi nhiệm vụ đó kết thúc, chương trình của bạn được hiển thị với kết quả.

For example:
- Making HTTP requests using fetch(), observable, timer...
- Accessing a user's camera or microphone using getUserMedia()
- Asking a user to select files using showOpenFilePicker()

Trong bài viết này, chúng ta sẽ bắt đầu bằng cách xem xét vấn đề với các hàm đồng bộ `(synchronous)` chạy lâu dài, điều này làm cho Bất đồng bộ `(asynchronous)` trở thành điều cần thiết.

## Synchronous programming

```js
const name = 'Miriam';
const greeting = `Hello, my name is ${name}!`;
console.log(greeting); // "Hello, my name is Miriam!"
```

- Trình duyệt chạy chương trình một cách hiệu quả từng dòng một, theo thứ tự mà chúng ta đã viết.
- Tại mỗi thời điểm, trình duyệt đợi dòng hiện tại kết thúc công việc trước khi chuyển sang dòng tiếp theo.
> Nó phải làm điều này bởi vì mỗi dòng phụ thuộc vào công việc được thực hiện trong các dòng trước đó.

Điều đó làm cho đây trở thành một chương trình đồng bộ. Nó sẽ vẫn đồng bộ ngay cả khi chúng ta gọi một hàm riêng biệt, như thế này:

```js
function makeGreeting(name) {
  return `Hello, my name is ${name}!`;
}

const name = 'Miriam';
const greeting = makeGreeting(name);
console.log(greeting);
// "Hello, my name is Miriam!"
```

Ở đây, makeGreeting () là một hàm đồng bộ vì người gọi phải đợi hàm hoàn thành công việc và trả về một giá trị trước khi người gọi có thể tiếp tục.

Vậy khi một function synchronous take quá nhiều thời gian thì sao? Đây là vấn đề cơ bản với các chức năng đồng bộ hoạt động lâu dài. Những gì chúng tôi cần là một cách để chương trình của chúng tôi:
- Bắt đầu một hoạt động lâu dài bằng cách gọi một hàm
- Yêu cầu chức năng đó bắt đầu hoạt động và trả về ngay lập tức, để chương trình của chúng tôi vẫn có thể đáp ứng các sự kiện khác.
- Thông báo cho chúng tôi kết quả của hoạt động khi nó cuối cùng hoàn thành.

> Đó chính xác là những gì các hàm bất đồng bộ có thể làm.

## Event handlers

Sự kiện là một hành động của người dùng, chẳng hạn như người dùng nhấp vào một nút, sự kiện là sự thay đổi trạng thái của một số đối tượng.

> Event handlers là một dạng của bất đồng bộ

```js
var btn = document.getElementById('button')
btn.addEventListener((event) => {
  // handle here
})
```

## Callbacks

Ví dụ, hãy xem xét những điều sau:

```js
function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();
```
Là một chương trình đồng bộ, điều này rất đơn giản. Nhưng điều gì sẽ xảy ra nếu chúng tôi triển khai các bước bằng cách sử dụng lệnh Callback?

```js
function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, result1 => {
    doStep2(result1, result2 => {
      doStep3(result2, result3 => {
        console.log(`result: ${result3}`);
      });
    });
  });

}

doOperation();
```

Bởi vì chúng ta phải gọi các lệnh callback bên trong các lệnh callback, chúng ta nhận được một hàm doOperation () lồng nhau sâu, `hàm này khó đọc` và `khó gỡ lỗi hơn nhiều`. Điều này đôi khi được gọi là "callback hell" hoặc "pyramid of doom" (vì vết lõm trông giống như một kim tự tháp ở mặt bên của nó).