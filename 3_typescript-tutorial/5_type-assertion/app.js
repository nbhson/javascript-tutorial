var mVariable = 'Typescript training'; // đang kiểu any
// Muốn dùng các phương thức của String phải convert về string
// let total = (<string>mVariable).length  // cách 1 
var total = mVariable.length; // cách 2
console.log(total);
