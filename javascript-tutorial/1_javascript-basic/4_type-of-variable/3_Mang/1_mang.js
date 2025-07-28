/**
    1. Tạo mảng
        - cách tạo
        - sử dụng cách nào
        - kiểm tra data type
    2. Truy xuất mảng
        - độ dài mảng
        - lấy phần tử theo index
 */

var arr_1 = [1,'Sơn',null, {}]
var arr_2 = new Array(1,'Sơn',null, {})

console.log(arr_1); // [ 1, 'Sơn', null, {} ]
console.log(arr_2); // [ 1, 'Sơn', null, {} ]

console.log(typeof arr_1); // object
console.log(typeof arr_2); // object

console.log(Array.isArray({})); // false
console.log(Array.isArray(arr_1)); // true
console.log(Array.isArray(arr_2)); // true
