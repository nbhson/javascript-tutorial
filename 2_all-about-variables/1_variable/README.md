# Biến (Variable) trong JavaScript

## Mục lục
- [1. Giới thiệu](#1-giới-thiệu)
- [2. Khai báo (Declaration) và khởi tạo (Initialization) biến](#2-khai-báo-declaration-và-khởi-tạo-initialization-biến)
- [3. Quy tắc đặt tên biến (Variable Naming Rules)](#3-quy-tắc-đặt-tên-biến-variable-naming-rules)
- [4. Kiểu dữ liệu của biến (Variable Types)](#4-kiểu-dữ-liệu-của-biến-variable-types)
- [5. Dynamic Typing (Kiểu động)](#5-dynamic-typing-kiểu-động)
- [6. var, let, const và Hoisting](#6-var-let-const-và-hoisting)
- [7. Kiểm tra sự tồn tại của biến](#7-kiểm-tra-sự-tồn-tại-của-biến)
- [8. Best Practice: Khi nào dùng let, const?](#8-best-practice-khi-nào-dùng-let-const)
- [9. Ví dụ thực tế](#9-ví-dụ-thực-tế)
- [10. Tổng kết](#10-tổng-kết)

## 1. Giới thiệu

**Variable** (biến) là một khái niệm cơ bản trong lập trình, dùng để lưu trữ giá trị (value) như số, chuỗi, mảng, object, v.v. Biến giống như một chiếc hộp mà bạn có thể đặt giá trị vào và sử dụng lại nhiều lần trong chương trình.

> **Lưu ý:** Variable không phải là giá trị, mà là "container" (hộp chứa) cho giá trị đó.

![Container](./Screenshot%202025-07-28%20at%2007.29.44.png)

---

## 2. Khai báo (Declaration) và khởi tạo (Initialization) biến

### 2.1. Khai báo biến

Bạn có thể khai báo biến bằng các từ khóa: `var`, `let`, hoặc `const`.

```js
let myName;
let myAge;
```

Lúc này, biến đã được tạo ra nhưng chưa có giá trị (giá trị là `undefined`).

### 2.2. Khởi tạo biến

Gán giá trị cho biến sau khi khai báo:

```js
myName = "Chris";
myAge = 37;
```

Hoặc khai báo và khởi tạo cùng lúc:

```js
let myDog = "Rover";
```

### 2.3. Thay đổi giá trị (Assignment)

Bạn có thể thay đổi giá trị của biến bất cứ lúc nào:

```js
myName = "Bob";
myAge = 40;
```

---

## 3. Quy tắc đặt tên biến (Variable Naming Rules)

- Chỉ dùng chữ cái (a-z, A-Z), số (0-9), dấu gạch dưới `_` và `$`.
- Không bắt đầu bằng số.
- Không chứa khoảng trắng.
- Không trùng với từ khóa của JavaScript (ví dụ: `var`, `function`, `let`, ...).
- JavaScript phân biệt chữ hoa và chữ thường (`myAge` khác `myage`).
- Nên dùng **camelCase** (ví dụ: `userName`, `totalScore`).

**Ví dụ tên tốt:**
- age
- myAge
- initialColor

```js
let $ = 1; // declared a variable with the name "$"
let _ = 2; // and now a variable with the name "_"
```

**Ví dụ tên không nên dùng:**
- 1
- a
- _12
- var
- thisisareallylongvariablenameman

```js
let 1a; // cannot start with a digit
let my-name; // hyphens '-' aren't allowed in the name
```

---

## 4. Kiểu dữ liệu của biến (Variable Types)

- **Number**: Số nguyên hoặc số thực
  ```js
  let myAge = 17;
  ```
- **String**: Chuỗi ký tự
  ```js
  let dolphinGoodbye = "So long and thanks for all the fish";
  ```
- **Boolean**: Giá trị đúng/sai (`true`/`false`)
  ```js
  let iAmAlive = true;
  let test = 6 < 3; // false
  ```
- **Array**: Mảng
  ```js
  let myNameArray = ["Chris", "Bob", "Jim"];
  let myNumberArray = [10, 15, 40];
  ```
- **Object**: Đối tượng
  ```js
  let dog = { name: "Spot", breed: "Dalmatian" };
  dog.name; // "Spot"
  ```

---

## 5. Dynamic Typing (Kiểu động)

JavaScript là **dynamically typed language** (ngôn ngữ kiểu động), nghĩa là bạn không cần chỉ định kiểu dữ liệu khi khai báo biến. Một biến có thể thay đổi kiểu dữ liệu trong quá trình chạy:

```js
let myNumber = "500"; // string
typeof myNumber; // "string"
myNumber = 500; // number
typeof myNumber; // "number"
```

An assignment without use strict

```js
// note: no "use strict" in this example
num = 5; // the variable "num" is created if it didn't exist
alert(num); // 5
```

This is a bad practice and would cause an error in strict mode:
```js
"use strict";
num = 5; // error: num is not defined
```
---

## 6. var, let, const và Hoisting

### 6.1. var
- Có thể khai báo lại nhiều lần.
- Có **function scope** (phạm vi hàm), không có block scope.
- Bị ảnh hưởng bởi **hoisting** (kéo lên đầu phạm vi).

```js
var x = 10;
var x = 20; // Không lỗi
```

### 6.2. let
- Không thể khai báo lại trong cùng một phạm vi.
- Có **block scope** (phạm vi khối lệnh).
- Không bị hoisting như var (gặp lỗi nếu truy cập trước khi khai báo - **temporal dead zone**).

```js
let y = 10;
let y = 20; // Lỗi
```

### 6.3. const
- Phải khởi tạo giá trị khi khai báo.
- Không thể gán lại giá trị mới.
- Nếu là object/array, có thể thay đổi thuộc tính/phần tử bên trong.

```js
const count = 1;
// count = 2; // Lỗi
const bird = { species: "Kestrel" };
bird.species = "Striated Caracara"; // Được phép
```

### 6.4. Hoisting
- **var**: Chỉ khai báo được hoisting, không phải giá trị khởi tạo.
- **let/const**: Không hoisting, truy cập trước khi khai báo sẽ lỗi (**temporal dead zone**).

```js
console.log(str); // undefined
var str = 'Hoisting';

console.log(x); // ReferenceError
let x = 10;
```

---

## 7. Kiểm tra sự tồn tại của biến

Dùng `typeof` để kiểm tra biến có tồn tại không:

```js
var x = 10;
console.log(typeof x !== 'undefined'); // true
console.log(typeof y !== 'undefined'); // false
```

> **Lưu ý:** `typeof` trả về `'undefined'` cho cả biến chưa khai báo và biến đã khai báo nhưng chưa gán giá trị.

---

## 8. Best Practice: Khi nào dùng let, const?

- **const**: Dùng khi giá trị không thay đổi (ưu tiên dùng const).
- **let**: Dùng khi giá trị sẽ thay đổi trong quá trình chạy.
- **var**: Không nên dùng trong code hiện đại, trừ khi cần hỗ trợ trình duyệt cũ.

---

## 9. Ví dụ thực tế

### Đếm số lần nhấn nút

```html
<button id="button_A">Press me</button>
<h3 id="heading_A"></h3>
```

```js
const buttonA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");
let count = 1;
buttonA.onclick = () => {
  buttonA.textContent = "Try again!";
  headingA.textContent = `${count} clicks so far`;
  count += 1;
};
```

---

## 10. Tổng kết

- Biến (variable) là "container" lưu trữ giá trị.
- Có thể khai báo bằng var, let, const (ưu tiên let/const).
- Chú ý quy tắc đặt tên, kiểu dữ liệu, dynamic typing.
- Hiểu rõ sự khác biệt giữa var, let, const và hoisting.
- Luôn ưu tiên const khi có thể, chỉ dùng let khi cần thay đổi giá trị.

---


- The old varv: <https://javascript.info/var>
- Task (giải pháp cho 1 số vấn đề): <https://javascript.info/variables#tasks>