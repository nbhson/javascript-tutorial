# Union

> Cho phép sử dụng nhiều hơn 1 kiểu dữ liệu, dùng cho một biến hoặc 1 tham số hàm

```ts
function listen(port: string | number) {
  // do listen
}

listen('3000'); // ok
listen(3000); // ok
listen(true); // TypeError: Argument of type true is not assignable to parameter type string | number
listen(); // TypeError: Invalid number of arguments, expected 1
```

Để tái sử dụng (reuse) 1 Union Type bất kỳ, các bạn có thể tạo Type Alias cho Union Type đó

```ts
type StringOrNumber = string | number;

function listen(port: StringOrNumber) {...}
function getSomething(): StringOrNumber {...}
```