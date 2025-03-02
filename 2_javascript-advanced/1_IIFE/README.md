# IIFE - Immediately Invoked Function Expression

> Là một function expression (biểu thức) được gọi ngay lập tức

- Rõ ràng hơn là một biểu thức tạo ra một hàm và hàm đó được gọi lập tức
- IIFE là cách gọi phổ biến - bên cạnh đó còn gọi với cái tên Self-Invoking function

## Sử dụng khi nào

- Khi sử dụng những thư viện chắc chắn rất dễ đặt trùng tên biến tên hàm của thư viện đang sử mà ko bị lỗi
- > Thư viện dùng IIFE này để có tính chất block "private" ko cho bên ngoài truy cập. Do ko có tính global nên không thay đổi hay ảnh hưởng (không xung đột) đến code bên ngoài HOẶC MUỐN ĐẢM BẢO TÍNH AN TOÀN DỮ LIỆU

```js
/*MỘT IIFE */
(function () {
  console.log("NOW NOW");
})(); // () gọi hàm luôn sau khi tạo hàm

/* TÍNH PRIVATE - BÊN NGOÀI KHÔNG THỂ TRUY CẬP VAÒ TRONG, NHƯNG BÊN TRONG CÓ THỂ SỬ DỤNG ĐƯỢC BÊN NGOÀI */
(function PrintMessage(message) {
  return message;
})("Chao ban");

PrintMessage("Message"); // private nên ko truy cập được
```

## Chú ý

### Phải có một dấú ; trước IIFE

```js
(function () {
  console.log("NOW NOW");
})();
```

### Dùng toán tử bất kì để ép kiểu nó về function: + - \* / ! :))

```js
!(function () {
  let name = "Sơn";
  console.log(name);
})();
```

### Ứng dụng nhỏ

```js
// chạy app.cars = null
// thì khi add vào ko thể add được thì cars lúc này bằng null => sinh ra lỗi

const app = {
  cars: [],
  add(car) {
    this.cars.push(car);
  },
  delete(index, car) {
    this.cars[index] = car;
  },
  update(index) {
    this.cars.splice(index, 1);
  },
};
app.cars = null;
app.add("car");

// => fix nó bằng IIFE
// => chỉ return về những thứ người dùng có thể thao tác thôi
// => chỉ cần gán IIFE bằng một biến thì có thể truy cập được các giá trị được return về

const app2 = (function () {
  // private
  const cars = [];
  return {
    all() {
      return cars;
    },
    add(car) {
      cars.push(car);
    },
    delete(index, car) {
      cars[index] = car;
    },
    update(index) {
      cars.splice(index, 1);
    },
  };
})(); // HAY
console.log(app2.all());
app2.add("Winner 2022");
console.log(app2.all());
```
