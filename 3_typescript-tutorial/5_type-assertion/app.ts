let mVariable: any = 'Typescript training'; // đang kiểu any

// Muốn dùng các phương thức của String phải convert về string
// let total = (<string>mVariable).length  // cách 1 
let total = (mVariable as string).length // cách 2
console.log(total);