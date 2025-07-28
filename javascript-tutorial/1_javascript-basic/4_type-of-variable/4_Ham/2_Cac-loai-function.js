// DECLARATION FUNCTION | CHẤP NHẬN HOISTING
function func_1() {}

// EXPRESSION FUNCTION | KHÔNG CHẤP NHẬN HOISTING (được khai báo bằng cách gán biến)
var func_2 = function () {};

// ANONYMOUS FUNCTION | CALL BACK
setTimeout(() => {}, 1000);

// OBJ
var obj1 = {
  myFunc: function () {},
};
var obj2 = {
  myFunc() {},
};
