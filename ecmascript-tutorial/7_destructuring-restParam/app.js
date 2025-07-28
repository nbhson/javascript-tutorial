/** Destructuring - ví dụ 1 */
var array1 = ["JS", "PHP", "Ruby"];
var [a, b] = array1;
console.log(a, b); // JS PHP

/** Destructuring - ví dụ 2 */
var objec1 = {
  name: "JS",
  price: 1000,
  time: "30d",
};
var { namex, price, time, description = "Default description" } = objec1;
console.log(price); // 1000
console.log(time); // 30d
console.log(description); // Default description

/** Destructuring - ví dụ 3 - méo hiểu */
var objec2 = {
  name: "JS",
  price: 1000,
  children: {
    name: "PHP",
  },
};
var {
  name: parentName, // gán giá trị của name vào biến parentName
  price,
  children: { name: childrenName },
} = objec2;
console.log(childrenName); //PHP

/* Rest Param: sử dụng cùng với Destructuring */
/* dùng để lấy ra các phần tử còn lại */
/* cho cả Array, Object và param cho function */
var array2 = ["JS", "PHP", "Ruby"];
var [d, ...rest] = array2;
console.log(d); // JS
console.log(rest); // PHP Ruby

/** argument 2 :)) */
function logger(a, b, ...rest) { // rest sẽ là một cái mảng
  console.log(rest); // [3,4,5,6]
}
logger(1,2,3,4,5,6)

/** nếu đối số spread là 1 arr hay object thì rest cũng cần là 1 arr hoặc object */
// function log(...rest) {
//   console.log(rest); 
// }
// log(1, 2, 3, [4, 5], { name: "Sơn", age: 23 }); // [1, 2, 3, [4, 5], {name: 'Sơn', age: 23}]

function logger2({name, price, ...rest}) {
  console.log(name);
  console.log(price);
  console.log(rest);
}
logger2({
  name: 'Name',
  price: 1000,
  description: 'Description',
  weight: 30
})
