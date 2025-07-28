// decleration function
function myFunc1(param) {
  console.log(param);
}
// expression funciton
const myFunc2 = function(param) {
  console.log(param);
}
// arrow function
const myFunc3 = (param) => {
  console.log(param);
}


// nếu 1 dòng thì bỏ {} và ko cần từ khóa return, bỏ {} thì nó sẽ tự hiểu là cần return
const func1 = (a,b) => {
  return a + b
}
const func2 = (a,b) => a + b 

const func3 = (a,b) => ({a,b}) // nên muốn return object thì dùng () bên ngoài {}
// console.log(func3(2,2));

// và ngắn gọn hơn :))
const logger = log => console.log(log)
// logger('log message')

// với function trong object
const course = {
  name: 'JS Basic',
  getName: () => {
    console.log(this); // context | nếu dùng funtion bình thường thì this có giá trị, nhưng với arrow function thì nó undefined
  }
}
// course.getName() // this = window

// ARROW FUNCTION KHÔNG DÙNG ĐÊ TẠO FUNCTION CONTRUCTOR // xem bài function contructor ở phần 1
const funcContruct = (a, b) => {
  this.a = a
  this.b = b
}
const jsContruct = new funcContruct(1,2)
console.log(jsContruct); // lỗi