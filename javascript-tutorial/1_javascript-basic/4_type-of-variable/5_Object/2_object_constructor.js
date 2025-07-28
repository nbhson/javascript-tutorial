function User(firstName, lastName, avatar) {
  // console.log(this); // User
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;

  this.getFullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}

var teacher = new User("Sơn", "Đặng", "avatar_1");
var student = new User("Sơn", "Nguyễn", "avatar_1");

teacher.luong = "10.000.000đ";
student.title = "Học sinh giỏi";

console.log(teacher);
console.log(student);

console.log(teacher.getFullName());
console.log(student.getFullName());
