/** Decleration function */
function sayHello() {
  console.log("Hello typescript");
}
sayHello(); // returns 5

/** Expression function */
let greeting = function () {
  console.log("Hello typescript");
};

/** Param */
function paramFunc(greeting: string, name: string): string {
  return greeting + " " + name + "!";
}
paramFunc("Hello", "Steve"); // "Hello Steve!"

/** Optional */
function optionalFunc(greeting: string, name?: string): string {
  return greeting + " " + name + "!";
}
optionalFunc("Hello"); // "Hello undefined!"

/** Default param */
function defaultParamFunc(name: string, greeting: string = "Hello") : string {
  return greeting + ' ' + name + '!';
}
defaultParamFunc('Steve');// "Hello Steve!"
defaultParamFunc('Steve', 'Hi'); //  "Hi Steve!".
defaultParamFunc('Bill'); // "Hello Bill!"

// void 0 là undefined (xem app.js)