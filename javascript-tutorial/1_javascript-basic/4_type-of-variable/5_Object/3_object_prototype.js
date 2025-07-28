/** 
 * Ngoại trừ null & undefined ra thì các kiểu còn lại (obj) trong JS đều có prototype riêng
 * Prototype định nghĩa các thuộc tính và phương thức của obj
 * => các thuộc tính và phương thức của một obj đều nằm trong prototype
 * => không DELETE được các thuộc tính và phương thức trong prototype
*/

function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
}

/** PROTOTYPE - Để dùng chung các thuộc tính và phương thức */
User.prototype.className = "F8";
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

var student = new User("Sơn", "Nguyễn", "avatar_1");
console.log(student);
console.log(student.className); // F8
console.log(student.getFullName()); // F8 Fullstack

/** PROTOTYPE - Để kế thừa obj */
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayFullName = function () {
    return `${this.firstName} ${this.lastName} --`;
  };
}

function Superman(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Superman.prototype = new Person(); // :)) newnew

var spm = new Superman("I'm", "Super man");

// console.log(spm);
// delete spm.firstName

console.log(spm.firstName); // in ra property của obj Suppernam trước, nếu không có nó mới vào prototype Suppernam để tìm
console.log(spm.sayFullName());
