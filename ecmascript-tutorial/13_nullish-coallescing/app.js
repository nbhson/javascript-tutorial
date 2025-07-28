/**
 * Nullish coalescing: kiểm tra null và undefined
 * Nullish coalescing assignment: kiểm tra null và undefined gán trực tiếp giá trị
 */

let a = 0;

// let b = a ?? 'Default value'
let b = a ??= 'Default value'

console.log(a);
console.log(b);
