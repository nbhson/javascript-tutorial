```ts
/** Generic - Array Method */
function getArray<T>(arr: T[]): T[] {
  return new Array<T>().concat(arr);
}

let numArr = getArray<number>([1, 2, 3]);
console.log(numArr); // [ 1, 2, 3 ]
numArr.push(4, 5, 6);
console.log(numArr); // [ 1, 2, 3, 4, 5, 6 ]

let stringArr = getArray<string>(["1", "2", "3"]);
console.log(stringArr); // [ '1', '2', '3' ]
stringArr.push("4", "5", "6");
console.log(stringArr); // [ '1', '2', '3' , '4', '5']

/** Generic - Multiple Type Variables */
function displayInfo<T, U>(name: T, age: U): void {
  console.log(`Name: ${name} - Age: ${age}`);
}
let son = displayInfo<string, number>("Sơn", 23); // Name: Sơn - Age: 23
let trinh = displayInfo<number, string>(23, "Trinh"); // Name: 23 - Age: Trinh

```

> Sử dụng generic ngoài việc có thể tái sử dụng với cho các function có tác vụ giống nhau, có lợi ích vì nó sẽ có cùng một data structure. Ví dụ như func generic ra một mảng number và chúng ta muốn lập qua nó bằng foreach, thì bên trong vòng lập sẽ biết và gợi ý các properties method cho từng phần tử