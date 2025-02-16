// call back là hàm (funcition) được truyền qua đối số khi gọi hàm khác

// 1. Nó là hàm
// 2. Nó là đối số
// 3. Được gọi lại (trong hàm nhận đối số)

function myFunction(param) {
  if (typeof param === "function") {
    param("Sơn Nguyễn");
  }
}

function myCallback(value) {
  console.log("Value: ", value);
}

myFunction(myCallback);
