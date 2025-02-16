"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// string thì string hết, number thì number hết
var a = {
    foo: '10',
    bar: '10'
};
var b = "a";
var c = "c";
var d = 10;
// Readonly<T> làm tất cả các props trong type thành readonly. Eg: Rất có lợi khi dùng cho Redux State.
var e = {
    firstName: 'Son',
    lastName: 'Nguyen'
};
// Required<T> làm tất cả các props trong type thành bắt buộc
var f = {
    firstName: 'Son',
    lastName: 'Nguyen',
    age: 20
};
// type Partial<T> làm tất cả các props trong type thành optional
var j = {};
function aaa() {
    return 1;
}
console.log(typeof aaa);
