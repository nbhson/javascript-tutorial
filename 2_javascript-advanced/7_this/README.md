# this

> this là từ khóa sẽ trả về đối tượng mà nó thuộc về

> this của global hoặc this trong function không phải là method của một object thì this là window

> arrow function ko có this

```js
const iPhone7 = {
  // thuộc tính - Property
  name: "iPhone 7",
  color: "pink",
  weight: 300,

  // phương thức - Method - là một cái hàm được dùng làm thuộc tính của một đối tượng
  take() {
    console.log(this); // iPhone7
  },
  objChild: {
    name: "Sơn",
    methodChild() {
      console.log(this); // objChild
    },
  },
};
console.log(iPhone7.objChild.methodChild());
```
