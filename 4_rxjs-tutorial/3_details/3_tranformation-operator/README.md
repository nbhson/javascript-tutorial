# RxJS Transformation Operators (Pipeable Operators)

Chúng ta sẽ bắt đầu đi vào tìm hiểu **Pipeable Operators**, thay vì được call độc lập thì nó sẽ được call ở trong `pipe()` method của một Observable instance.

## Pipeable Operators

Một Pipeable Operator là một function nó nhận đầu vào là một Observable và returns một Observable khác. Chúng là pure operation: Observable truyền vào sẽ không bị thay đổi gì.

Cú pháp:

```ts
observableInstance.pipe(
  operator1(),
  operator2(),
)
```

Với cú pháp trên thì `observableInstance` có *pipe* bao nhiêu operator đi nữa thì nó vẫn không đổi, và cuối cùng chúng ta sẽ nhận lại một Observable nên để có thể sử dụng thì chúng ta cần gán lại, hoặc thực hiện subscribe ngay sau khi *pipe*:

```ts
const returnObservable = observableInstance.pipe(
  operator1(),
  operator2(),
)
```

## Transformation Operators

### map

Có thể biến đổi (thêm hoặc xóa) gía trị ban đầu của một arr hoặc object

### pluck

Lấy ra một property trong một object, nếu không có sẽ ra undefined

### mapTo (từ v9 sử dụng map để thay thế)

Làm cho stream emit một giá trị mặc định (fixed)

### scan

Giống như reduce nhưng nó sẽ emit luôn từng giá trị, chứ không như reduce chỉ emit giá trị cuối cùng

### reduce

Operator này khá giống `scan` là nó sẽ reduce value overtime, nhưng nó sẽ đợi đến khi source complete (khi observable complete - nếu một observable không complete thì nó sẽ không bao giờ reduce được) rồi thì nó mới emit một giá trị cuối cùng và gửi đi `complete`.

### toArray

Giả sử bạn cần collect toàn bộ các value emit bởi stream rồi lưu trữ thành một array, sau đó đợi đến khi stream complete thì emit một array và complete.

### buffer

- Khi không muốn bỏ qua giá trị khi subscribe, nhưng cần phải có hiệu lệnh thì mới hiển thị dùng buffer

- Có nghĩa là cần phải có điều kiện gì đó để trigger thì observable mới chạy

### bufferTime

Tương tự như `buffer`, nhưng emit values mỗi khoảng thời gian `bufferTimeSpan` ms.
