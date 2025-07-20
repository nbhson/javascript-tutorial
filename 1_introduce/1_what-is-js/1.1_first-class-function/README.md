# First-class Function

Một ngôn ngữ lập trình được gọi là có hàm First-class khi các hàm trong ngôn ngữ đó được xử lý như bất kỳ biến nào khác. Ví dụ, trong ngôn ngữ như vậy, một hàm có thể được truyền dưới dạng đối số cho các hàm khác, có thể được trả về bởi một hàm khác và có thể được gán dưới dạng giá trị cho một biến.

## Assigning a function to a variable

```js
const foo = () => {
  console.log("foobar");
};
foo(); // Invoke it using the variable
// foobar
```

We assigned an Anonymous Function in a Variable, then we used that variable to invoke the function by adding parentheses () at the end.

## Passing a function as an argument

```js
function sayHello() {
  return "Hello, ";
}
function greeting(helloMessage, name) {
  console.log(helloMessage() + name);
}
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello, "JavaScript!");
// Hello, JavaScript!
```

We are passing our sayHello() function as an argument to the greeting() function, this explains how we are treating the function as a value.

## Returning a function

```js
function sayHello() {
  return () => {
    console.log("Hello!");
  };
}
```

In this example, we are returning a function from another function - We can return a function because functions in JavaScript are treated as values.

<https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function>