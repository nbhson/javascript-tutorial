let employee: string = "John";

let num1: number = 1;

function letDeclaration() {
  let num2: number = 2;
  if (num2 > num1) {
    let num3: number = 3;
    num3++;
  }

  while (num1 < num2) {
    let num4: number = 4;
    num1++;
  }

  console.log(num1); // OK
  console.log(num2); // OK
  // console.log(num3); //Compiler Error: Cannot find name 'num3' - Code block
  // console.log(num4); //Compiler Error: Cannot find name 'num4' - Code block
}

letDeclaration();

function varDeclaration() {
  let num2: number = 2;
  if (num2 > num1) {
    var num3: number = 3;
    num3++;
  }

  while (num1 < num2) {
    var num4: number = 4;
    num1++;
  }

  console.log(num1); // OK
  console.log(num2); // OK
  console.log(num3); // OK
  console.log(num4); // OK
}

varDeclaration();

// 1) Block-scoped let variables cannot be read or written to before they are declared.
console.log(num1); // Compiler Error: error TS2448: Block-scoped variable 'num' used before its declaration
// let num1:number = 10 ;

console.log(num2); // OK, Output: undefined
var num2: number = 10;

// 2) Let variables cannot be re-declared
var num: number = 1; // OK
var Num: number = 2; // OK
var NUM: number = 3; // OK
var NuM: number = 4; // OK

// let num:number = 5;// Compiler Error: Cannot redeclared block-scoped variable 'num'
// let Num:number = 6;// Compiler Error: Cannot redeclared block-scoped variable 'Num'
// let NUM:number = 7;// Compiler Error: Cannot redeclared block-scoped variable 'NUM'
// let NuM:number = 8;// Compiler Error: Cannot redeclared block-scoped variable 'NuM'

// 3) Same Variable Name in Different Blocks
let number: number = 1;

function demo() {
  let number: number = 2;

  if (true) {
    let number: number = 3;
    console.log(number); //Output: 3
  }

  console.log(number); //Output: 2
}
console.log(number); //Output: 1
demo();
