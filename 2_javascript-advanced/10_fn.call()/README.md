# Fn.call()

> Fn.call() giúp gọi hàm và bind this tới đối tượng khác, mặc định this là window object

- Fn.call() không trả ra hàm mới, nó gọi luôn hàm sau khi bind this (Fn.bind() thì chỉ bind this nhưng không gọi hàm)
- Fn.call() dùng để mượn hàm - function borrowing
- Fn.call() có thể dùng để kế thừa properties & method từ 1 Constructor khác

**VD1**

```js
function random() {
  console.log(Math.random());
}
random.call();
```

**VD2 - Bind this**

```js
const teacher = {
  firstName: "Minh",
  lastName: "Thu",
};
const me = {
  firstName: "Sơn",
  lastName: "Nguyễn",
  showFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

me.showFullName(); // this là me
me.showFullName.call(); // this là window
me.showFullName.call(teacher); // Minh Thu - tương tự như bind, bind this, rồi call luôn :))
```

**VD3 - strict mode**
```js
// khi có strict mode thì this ở scope window, log ra trong 1 hàm sẽ lỗi
// tuy nhiên với call(this), bind this sẽ được chấp nhận và ko lỗi với strict mode
this._lastName = "_Sơn";
this._firstName = "_Nguyễn";

function showName() {
  console.log(`${this._firstName} ${this._lastName}`);
}
showName(); // lỗi với strict mode
showName.call(this); // ko lỗi với strict mode
```

**VD4 - Tính kế thừa**
```js
function Animal(name, weight) {
  // console.log(this); // Chicken - do dòng 48
  this.name = name;
  this.weight = weight;
}

function Chicken(name, weight, legs) {
  Animal.call(this, name, weight);
  this.legs = legs;
}

const sonNguyen = new Chicken("Sơn", 53, 2);
console.log(sonNguyen);
```

**VD5 - Mượn hàm**
```js
function logger() {
  Array.prototype.forEach.call(arguments, (item) => {
    // arguments là this, đang bind this là bind arguments :))
    console.log(item);
  });
}
console.log(1, 2, 3, 4, 5);
```