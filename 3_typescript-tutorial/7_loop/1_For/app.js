// for
for (var i = 0; i < 3; i++) {
    console.log("Block statement execution no." + i);
}
// for of
var arrOf = [10, 20, 30, 40];
for (var _i = 0, arrOf_1 = arrOf; _i < arrOf_1.length; _i++) {
    var val = arrOf_1[_i];
    console.log(val); // prints values: 10, 20, 30, 40
}
// for in
var arrIn = [10, 20, 30, 40];
for (var index in arrIn) {
    console.log(index); // prints indexes: 0, 1, 2, 3
    console.log(arrIn[index]); // prints elements: 10, 20, 30, 40
}
