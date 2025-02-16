/**
 * Định nghĩa key value cho object
 * Định nghĩa phương thức cho object
 * Định nghĩa key cho object dưới dạng biến
 */

var nameCourse = "JS";
var price = 1000;

// Định nghĩa key value cho object
var course1 = {
  nameCourse,
  price,
};
console.log(course1);

// Định nghĩa phương thức cho object
var course2 = {
  nameCourse,
  price,
  getName() {
    return nameCourse;
  },
};
console.log(course2.getName());

// Định nghĩa key cho object dưới dạng biến :))
var fieldName = "Sơn Nguyễn";
var fieldPrice = "18 tuổi";

const course3 = {
  [fieldName]: "JS", // newnew
  [fieldPrice]: 1000,
};

console.log(course3);
console.log(course3["Sơn Nguyễn"]); // JS
console.log(course3["18 tuổi"]); // 1000