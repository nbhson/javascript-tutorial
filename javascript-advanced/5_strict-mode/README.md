# Strict mode

> In JavaScript, the strict mode is introduced in the `ES5 (ECMAScript 2009)`. The purpose behind introducing the "strict mode" is to make the JavaScript code more secure.

- Nhằm cải thiện một vài hạn chế trong các phiên bản trước đó
- Tránh quên từ khóa khai báo biến
- Sử dụng bộ nhớ hiệu quả vì tránh tạo biến global

## Case sử dụng

### You can't initialize the variable with a value without declaring it.
```js
"use strict";
  let y = 50; // This is valid
  document.write("The value of the X is: " + y);

  x = 100; // This is not valid
  document.write("The value of the X is: " + x);

  numObj = {a: 89, b: 10.23}; // This is invalid

```

### You can't delete objects / object prototype using the delete keyword.

```js
'use strict';

let women = { name: "Aasha", age: 29 };
delete women; // This is invalid
delete women.prototype; // This is invalid
```

### Deleting the function using the delete operator is not allowed.

```js
'use strict';
function func() { }
delete func; // This is invalid
```

### You can't assign octal numbers to variables.

```js
'use strict';
let octal = 010; // Throws an error
```

### You can't use reserved keywords like eval, arguments, public, etc., as an identifier.

```js
'use strict';
let public = 100; // Throws an error
```

### In the strict mode, when you use the 'this' keyword inside the function, it refers to the reference object through which the function is invoked. If the reference object is not specified, it refers to the undefined value.

```js
'use strict';
function test() {
  console.log(this); // Undefined
}
test();
```

### Strict Mode in the Local Scope

```js
 x = 100; // This is valid
document.write("The value of the X is - " + x);
function test() {
    "use strict";
    y = 50; // This is not valid
    document.write("The value of the y is: " + x);
}
test();
```

### Báo lỗi khi hàm có tham số trùng tên 
```js
function sum(a, a) {
  return a + a
}
console.log(sum(6,9)); // 18 nếu không có strict mode | có strict mode báo lỗi

/** Không đặt tên biến, tên hàm bằng một số từ khóa nhạy cảm của ngôn ngữ */
var let = 10;
console.log(let);
```

### Khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block

```js
if (true) {
  function sum(a, b) {
    console.log(a + b);
  }
}

sum(6,9) // 15 nếu ko có strict mode | có strict mode báo lỗi
```

### Báo lỗi khi gán lại giá trị cho thuộc tính có thể ghi: false

```js
const student = {
  fullName: "Nguyễn Văn A",
};
student.fullName = "Nguyễn Văn B"; // writeable = true
console.log(student);

const student = Object.freeze({
  // đóng băng không thể sửa
  fullName: "Nguyễn Văn A",
});
student.fullName = "Nguyễn Văn B"; // writeable = false => Lỗi không sữa được
console.log(student);
```

```js
const student = {};
Object.defineProperty(student, "fullName", {
  // newnew
  value: "Nguyễn Văn A",
  writeable: false,
});
student.fullName = "Nguyễn Văn B"; //  Lỗi
console.log(student);
```

## Chú ý

### Cách thêm strict mode

- Thêm use strict ở đầu file.js
- Thêm use strict ngay sau thẻ mở <script>
- Thêm use strict vào đầu phạm vi hàm

```js
"use strict"; // trước nó không được có đoạn code nào cả

var fullName = "Nguyen Van A"; // tạo ra biến fullName ở phạm vi global
function testFunc() {
  // "use strict";
  var age = 18; // tạo ra biến age ở phạm vi global
}
testFunc();
```
