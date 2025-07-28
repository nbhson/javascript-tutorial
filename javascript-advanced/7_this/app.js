"use strict";

let button = document.querySelector("button");
button.onclick = function (e) {
  console.dir(this); // button - dir in ra dạng object // newnew
};

// global -> window
console.log(this);

/**
 * this ở trong một cái hàm mà nó không phải là
 * phương thức của một obj => window
 */
function myFunc() {
  console.log(this); // window - trường hợp này sẽ undefined với strict mode
}
myFunc();

// this trong function constructor đại diện cho đối tượng được tạo
function Car(name, color) {
  this.name = name;
  this.color = color;
}
const porsche = new Car("Porsche", "white");
console.log(porsche);

// arrow function không có this
