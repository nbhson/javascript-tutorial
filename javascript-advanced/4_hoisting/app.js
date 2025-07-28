let x = "x";
{
  let x = "xx";
  {
    console.log(x); //  Uncaught ReferenceError:

    let x = "xxx"; // nó vẫn được hoisting để biết trong phạm vi này là có biến x rồi, không phải chạy ra phạm vi bên ngoài
  }
}


console.log(y);
const y = 10;
