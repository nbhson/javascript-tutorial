/** Variable */
let code: string | number;
code = 1;
code = "string";

/** Function */
function displayType(code: string | number) {
  if (typeof code === "number") console.log("Code is number.");
  else if (typeof code === "string") console.log("Code is string.");
}

displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
// displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number

type StringOrNumber = string | number;

function listen(port: StringOrNumber) { }
function getSomething(): StringOrNumber { return 0 }

typeof 'string'; // string
typeof 123; // number
typeof true; // boolean
typeof {}; // object
typeof []; // object
typeof (() => { }); // function
typeof null; // object
typeof undefined; // undefined
typeof new Date(); // object

typeof String; // function
typeof Boolean; // function
typeof NaN; // number

typeof typeof 123; // string