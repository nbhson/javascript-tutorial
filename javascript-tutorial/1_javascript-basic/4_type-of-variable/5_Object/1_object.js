// function -> phương thức/methods
// property -> thuộc tính

var myInfo = {
  name: "Sơn",
  age: 23,
  sex: 1,
  getFullName: function () {
    return `${this.name} Nguyễn`;
  },
};
myInfo.email = "nbhson43@gmail.com";

console.log(myInfo);
console.log(myInfo.name); // Sơn
console.log(myInfo["name"]); // Sơn Nguyễn

var myKey = "email";
console.log(myInfo[myKey]); // nbhson43@gmail.com

delete myInfo.sex; // xóa thuộc tính trong một object // newnew
console.log(myInfo);

console.log(myInfo.getFullName()); // Sơn Nguyễn
