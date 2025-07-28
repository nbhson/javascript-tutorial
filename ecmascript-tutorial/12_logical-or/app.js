/**
 * Logical or: kiểm tra truthy và falsy
 * Logical or assignment: kiểm tra truthy, falsy và trực tiếp gán giá trị
 */

let a = false;
// let b = a || 10;
b = a ||= 10;

console.log(a);
console.log(b);