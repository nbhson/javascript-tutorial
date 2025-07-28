# Fn.apply()

> Cho phép gọi một hàm với một this (bind) và truyền đối số cho hàm gốc dưới dạng mảng

**VD 1 - Thằng call làm gì thì apply cũng làm được tương tự**

```js
const teacher = {
  firstName: "Thu",
  lastName: "Minh",
};

function greet(greeting, message) {
  return `${greeting} ${this.firstName} ${this.lastName}, ${message}`;
}

// call luôn
let result1 = greet.apply(teacher, ["Em chào cô", "Cô dạy môn gì thế?"]);
console.log(result1);

// call luôn
let result2 = greet.call(teacher, "Em chào cô", "Cô dạy môn gì thế?");
console.log(result2);

// dùng () để call
let result3 = greet.bind(teacher, "Em chào cô", "Cô dạy môn gì thế?");
console.log(result3());
```

**VD 2 - Mượn hàm**
```js

const teacher = {
  firstName: "Thu",
  lastName: "Minh",
  isOnline: false,
  goOnline() {
    this.isOnline = true;
    console.log(`${this.firstName} ${this.lastName} is Online`);
  },
  goOffline() {
    this.isOnline = false;
    console.log(`${this.firstName} ${this.lastName} is Offline`);
  },
};
const me = {
  firstName: "Sơn",
  lastName: "Nguyễn",
  isOnline: false,
};

console.log(teacher.isOnline);
teacher.goOnline();
console.log(teacher.isOnline);

console.log(me.isOnline);
teacher.goOnline.apply(me);
console.log(me.isOnline);
```

**VD3 - Kế thừa**
```js
// VD 2 - Extend
function Animal(name, weight) {
  this.name = name;
  this.weight = weight;
}

function Parrot() {
  Animal.apply(this, arguments);
  this.speek = function () {
    console.log("Nhà có khách");
  };
}

const conVet = new Parrot("Vẹt", 300);
conVet.speek();

```