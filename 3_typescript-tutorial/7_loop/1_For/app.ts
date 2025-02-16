// for
for (let i = 0; i < 3; i++) {
  console.log("Block statement execution no." + i);
}

// for of
let arrOf = [10, 20, 30, 40];
for (var val of arrOf) {
  console.log(val); // prints values: 10, 20, 30, 40
}

// for in
let arrIn = [10, 20, 30, 40];
for (var index in arrIn) {
  console.log(index); // prints indexes: 0, 1, 2, 3

  console.log(arrIn[index]); // prints elements: 10, 20, 30, 40
}
