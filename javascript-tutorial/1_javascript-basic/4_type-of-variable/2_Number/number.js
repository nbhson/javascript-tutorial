/**
    Kiểu số trong JS
    
    1. Tạo giá trị number
        - cách tạo
        - dùng cách nào
        - kiểm tra data type
    
    2. Làm việc với number
        - to string
        - to fixed (làm tròn) -> string
        - Math() | .PI .round() .abs() .ceil() .floor() .random() .min() .max()
 */

var a = new Number(23)
var PI = 3.14

console.log(typeof a, typeof PI); // object, number
console.log(isNaN(20 / 'AC')); // true
console.log((22).toString()); // "22"

console.log("Math.PI: ",Math.PI); // 3.14
console.log("Math.round:", Math.round(3.4)); // tròn trên hoặc tròn dưới
console.log("Math.ceil:", Math.ceil(3.1)); // tròn trên
console.log("Math.floor:", Math.floor(3.9)); // tròn dưới
console.log("Math.random:", Math.random()); // random số ngầu nhiên dưới 1
console.log("Math.abs:", Math.abs(-15.41)); // giá trị tuyệt đối
console.log("Math.abs:", Math.min(5,9,4,8,5,8.7,1)); // giá trị nhỏ nhất
console.log("Math.abs:", Math.max(5,9,4,8,5,8.7,1)); // giá trị nhỏ nhất