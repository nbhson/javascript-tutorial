# Asynchronous 

> JavaScript là một ngôn ngữ lập trình đơn luồng có nghĩa là chỉ có một điều có thể xảy ra tại một thời điểm. Tức là, JavaScript engine chỉ có thể xử lý một câu lệnh tại một thời điểm trong một luồng duy nhất.

Mặc dù ngôn ngữ đơn luồng đơn giản hóa việc viết code do bạn không cần lo lắng về các vấn đề tương tranh, điều này cũng có nghĩa là bạn không thể thực hiện các tác vụ dài như truy cập mạng mà không chặn luồng chính.

Hãy tưởng tượng bạn request dữ liệu từ một API. Tùy thuộc vào tình hình máy chủ có thể mất một thời gian để xử lý request trong khi chặn luồng chính làm cho trang web không hồi đáp.

Đó là lý do asynchronous JavaScript xuất hiện. Sử dụng asynchronous JavaScript (callbacks, promises, and async/await) bạn có thể thực hiện các request network dài mà không chặn luồng chính.

## Synchronous JavaScript hoại động như thế nào?

```js
const second = () => {
  console.log('Hello there!');
}
const first = () => {
  console.log('Hi there!');
  second();
  console.log('The End');
}
first();
```

Để hiểu đoạn code trên được thực thi như thế nào trong JavaScript engine, chúng ta phải hiểu khái niệm về `execution context` và `call stack`.

### Execution Context

Execution Context là một khái niệm trừu tượng về môi trường nơi JavaScript code được đánh giá và thực hiện. Bất cứ khi nào code được thực thi trong JavaScript, nó chạy trong một execution context.

- Code cục bộ thực thi trong một execution context cục bộ, 
- Code toàn cục thực hiện trong một execution context toàn cục. 
> Mỗi hàm có một execution context riêng của nó.

### Call Stack

call stack như tên gọi của nó là một ngăn xếp với cấu trúc LIFO được sử dụng để lưu trữ tất cả các execution context được tạo ra trong quá trình thực thi code.

`JavaScript có một ngăn xếp duy nhất` vì nó là một ngôn ngữ lập trình đơn luồng. Call Stack có cấu trúc LIFO nghĩa là các mục chỉ có thể được thêm hoặc xóa khỏi đầu ngăn xếp.

Hãy quay lại đoạn mã trên và tìm hiểu cách code được thực thi bên trong JavaScript engine.

### Vậy điều gì đang xảy ra ở đây?

Khi đoạn code này được thực thi, một execution context toàn cục được tạo ra (biểu diễn bằng hàm main()) và được đẩy vào đầu ngăn xếp. Khi hàm first() được gọi, nó được đẩy vào đầu ngăn xếp.

Tiếp theo, console.log('Hi there!') được đẩy vào đầu ngăn xếp, khi kết thúc, nó được lấy ra từ ngăn xếp. Sau đó hàm second() được gọi và nó được đẩy vào đầu của ngăn xếp.

console.log('Hello there!') được đẩy vào đầu ngăn xếp là lấy ra khi nó kết thúc. Hàm second kết thúc, do đó nó được lấy ra khỏi ngăn xếp.

console.log(‘The End’) được đẩy vào đầu của ngăn xếp và xóa đi khi nó kết thúc. Sau đó, hàm first kết thúc và nó được lấy ra khỏi ngăn xếp.

Chương trình thực hiện xong ở đây và execution context toàn cục (main()) được lấy ra khỏi ngăn xếp.

Đến đây ta đã có ý tưởng cơ bản về call stack và JavaScript đồng bộ hoạt động như thế nào, hãy quay trở lại với JavaScript bất đồng bộ.

## Asynchronous in JavaScript
More: <https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous>