/** Global */
var message = "Học về scope"; //global.
function logger() {
  console.log(message);
}
logger()

/** Code block - if, for,... */
{
  let age = 18; // var thì bên ngoài gọi đc
  console.log(age);
}
console.log(age); // let (Error: age is not defined) var (18)

/** Local scope */
function logger() {
  var name = "Son";
}
logger();
console.log(name);

/** Khi GỌI hàm luôn có 1 phạm vi MỚI được tạo, tuy là một hàm nhưng gọi nhiều lần thì nó sẽ tạo ra nhiều lần phạm vi đó */

/** Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó VÀ bên ngoài nó như IIFE */

/** Cách thức một biến được truy cập */
