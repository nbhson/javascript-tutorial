# Metaprogramming

_`Metaprogramming` là một kỹ thuật lập trình trong đó các chương trình máy tính có khả năng coi các chương trình khác là dữ liệu của chúng. Điều này có nghĩa là một chương trình có thể được thiết kế để `read`, `generate`, `analyze` hoặc `transform` (chuyển đổi) các chương trình khác và thậm chí tự sửa đổi (modify ifself) trong khi chạy._

## What is Reflection in Metaprogramming?

- `Reflection` là một nhánh của Metaprogramming. Reflection có ba khái niệm:
  - **Introspection**: Chỉ truy cập để đọc cấu trúc chương trinh
  - **Self-Modification**: Thay đổi cấu trúc
  - **Intercession**: Thay đổi ngữ nghĩa 1 số toán tử của ngôn ngữ lập trình

## Kỷ nguyên của Metaprogramming trước ES6

### Introspection

Trước khi đưa đối tượng Reflect vào ES6, chúng ta vẫn có thể xem xét introspection. Đây là một ví dụ về cách `READ` cấu trúc của chương trình _(Object.keys() đã thực hiện việc truy cập cấu trúc.)_

```js
var users = {
  Tom: 32,
  Bill: 50,
  Sam: 65,
};

Object.keys(users).forEach((name) => {
  const age = users[name];
  console.log(`User ${name} is ${age} years old!`);
});

// User Tom is 32 years old!
// User Bill is 50 years old!
// User Sam is 65 years old!
```

### Self Modification

Hãy lấy một đối tượng blog có một phương thức để `sửa đổi chính nó` _(thay đổi cấu trúc)_:

```js
var blog = {
  name: "freeCodeCamp",
  modifySelf: function (key, value) {
    blog[key] = value;
  },
};

blog.modifySelf("author", "Tapas");
```

### Intercession

Intercession trong metaprogramming có nghĩa là hành động hoặc thay đổi mọi thứ hoặc một cái gì đó khác.
Phương thức Object.defineProperty () trước ES6 `có thể thay đổi ngữ nghĩa của đối tượng`:

```js
var sun = {};

Object.defineProperty(sun, "rises", {
  value: true,
  configurable: false,
  writable: false,
  enumerable: false,
});

console.log("sun rises", sun.rises);
sun.rises = false;
console.log("sun rises", sun.rises);

// sun rises true
// sun rises true
```

As you can see, the `sun` object was created as a normal object. Sau đó, ngữ nghĩa đã được thay đổi để nó không thể ghi được.

## The Reflect API (Sau ES6)

Trong ES6, Reflect là một Global Object mới (như Math) cung cấp một số chức năng tiện ích.
Một số hàm này có thể hoạt động giống hệt như các phương thức từ Object hoặc Function.

Tất cả các hàm này là các hàm `Introspection`, nơi bạn có thể truy vấn một số chi tiết nội bộ về chương trình tại thời điểm chạy.

```js
// Reflect object methods

Reflect.apply();
Reflect.construct();
Reflect.get();
Reflect.has();
Reflect.ownKeys();
Reflect.set();
Reflect.setPrototypeOf();
Reflect.defineProperty();
Reflect.deleteProperty();
Reflect.getOwnPropertyDescriptor();
Reflect.getPrototypeOf();
Reflect.isExtensible();
```

## The Proxy Object

> Proxy để có thể tùy chỉnh các toán tử được thực hiện trong object và đây chính là 1 trong những feature của metaprogramming

Dưới đây là một số thuật ngữ hữu ích bạn cần nhớ và sử dụng:

- The `target`: Object mà chúng ta sẽ thực hiện việc customize các toán tử.
- The `handler`: Nơi cho phép chúng ta định nghĩa việc customize như thế nào.
- The `trap`: Nơi chúng ta viết code can thiệp vào tác vụ của toán tử

[Flow](flow-1.png)

The syntax to create a Proxy object is as follows:

```js
let proxy = new Proxy(target, handler);

handler.apply();
handler.construct();
handler.get();
handler.has();
handler.ownKeys();
handler.set();
handler.setPrototypeOf();
handler.getPrototypeOf();
handler.defineProperty();
handler.deleteProperty();
handler.getOwnPropertyDescriptor();
handler.preventExtensions();
handler.isExtensible();
```

### How to get unavailable object property values

```js
const employee = {
  firstName: "Tapas",
  lastName: "Adhikary",
};

console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.org);
console.log(employee.fullName);

// Tapas
// Adhikary
// undefined
// undefined
```

Now let's use the Proxy object to add some custom behavior to the employee object.

```js
// Step 1: Create a Handler that uses a get trap
let handler = {
  get: function (target, fieldName) {
    if (fieldName === "fullName") {
      return `${target.firstName} ${target.lastName}`;
    }

    return fieldName in target ? target[fieldName] : `No such property as, '${fieldName}'!`;
  },
};

// Step 2: Create a Proxy Object
let proxy = new Proxy(employee, handler);

// Step 3: Access the properties on the Proxy object
console.log(proxy.firstName);
console.log(proxy.lastName);
console.log(proxy.org);
console.log(proxy.fullName);

// Tapas
// Adhikary
// No such property as, 'org'!
// Tapas Adhikary
```

### Proxy for Validation of Values

```js
// Step 1: Create a handler that uses a set trap
const validator = {
  set: function (obj, prop, value) {
    if (prop === "age") {
      if (!Number.isInteger(value)) {
        throw new TypeError("Age is always an Integer, Please Correct it!");
      }
      if (value < 0) {
        throw new TypeError("This is insane, a negative age?");
      }
    }
  },
};

// Step 2: Create a Proxy Object
let proxy = new Proxy(employee, validator);

// Step 3: Assign a non-integer value to a property, say, age
proxy.age = "I am testing a blunder"; // string value => Error: TypeError: Age is always an Integer, Please Correct it!
```

### How to use Proxy and Reflect together

```js
const employee = {
  firstName: "Tapas",
  lastName: "Adhikary",
};

let logHandler = {
  get: function (target, fieldName) {
    console.log("Log: ", target[fieldName]);

    // Use the get method of the Reflect object
    return Reflect.get(target, fieldName);
  },
};

let func = () => {
  let p = new Proxy(employee, logHandler);
  p.firstName;
  p.lastName;
};

func();
```

## Metaprogramming Pitfalls

Mặc dù khái niệm Lập trình siêu cấp mang lại cho chúng ta rất nhiều sức mạnh, nhưng điều kỳ diệu của nó đôi khi có thể đi sai hướng.

Be careful of:

- Quá nhiều ma thuật! Hãy chắc chắn rằng bạn hiểu nó trước khi bạn áp dụng nó.
- Hiệu suất có thể đạt được khi bạn biến điều không thể thành có thể
- Có thể được coi là phản gỡ lỗi.

## In Summary

- Reflect và Proxy là những sự kết hợp tuyệt vời trong JavaScript để hỗ trợ Metaprogramming
- Rất nhiều tình huống phức tạp có thể được xử lý với sự giúp đỡ của chúng
- Hãy nhận biết những mặt trái của nó.
- ES6 Symbols cũng có thể được sử dụng với các lớp và đối tượng hiện có của bạn để thay đổi hành vi của chúng.

> PROXY như 1 thằng wraper, có làm cái gì đó (validate,...) trước và sau khi gọi real service
> REFLECT là 1 thằng can thiệp để thay đổi behavious mặc định của Object đó
