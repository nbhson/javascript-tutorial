/** */
const a = { // hằng thì không sửa lại được value
  name: 'Sơn'
}

a.name = 'Nguyễn' // nhưng chúng ta đâu có sửa value của nó
// a = 'Nguyễn' // Error
console.log(a);

/**
 * Value type with function
 * => tạo ra 1 ô nhớ mới
 *    và chép giá trị của biến được gán vào ô nhớ mới đó
 */

 function sum(a, b) {
  a = 0
  b = 0
  console.log(a, b); // 0 0
}

const c = 1
const d = 2
sum(c, d); // 0 0
console.log(c, d); // 1 2 :)) hay