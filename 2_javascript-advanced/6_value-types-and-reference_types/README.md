# Value types and Reference types

## Value type - Kiểu tham trị

> Các kiểu dữ liệu nguyên thủy tại 1 thời điểm chỉ lưu 1 giá trị thôi

- string
- number
- boolean
- bigInt
- symbol
- undefined
- null

```js
let a = 1;
let b = a;
a = 2;
console.log(b); // 1
```

## Reference types - Kiểu tham chiếu

- Object
- Array (cũng là object)
- Function (cũng là object)

### Object

```js
let a = {
  name: "Mercedes",
};
let b = a;
a.name = "BMW";

console.log(a); // BMW
console.log(b); // BMW
console.log(b === a); // true
```

### Array

```js
let a = [1, 2, 3, 4, 5];
let b = a

console.log(a); // [1, 2, 3, 4, 5]
console.log(b); // [1, 2, 3, 4, 5]

b.push(6) 

console.log(a); // [1, 2, 3, 4, 5, 6]
console.log(b); // [1, 2, 3, 4, 5, 6]
console.log(a === b); // true
```

### Function

```js
function func(obj) {
  // let obj = f
  obj.name = 'Mercedes'
  console.log(obj); // Mercedes
}

const f = {
  name: 'BMW'
}
func(f)

console.log(f); // Mercedes
````