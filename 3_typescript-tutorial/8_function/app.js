/** Decleration function */
function sayHello() {
    console.log("Hello typescript");
}
sayHello(); // returns 5
/** Expression function */
var greeting = function () {
    console.log("Hello typescript");
};
/** Param */
function paramFunc(greeting, name) {
    return greeting + " " + name + "!";
}
paramFunc("Hello", "Steve"); // "Hello Steve!"
/** Optional */
function optionalFunc(greeting, name) {
    return "".concat(greeting, " ").concat(name !== null && name !== void 0 ? name : (name = 'Sơn'), " !");
}
console.log(optionalFunc("Hello")); // "Hello undefined!"
/** Default param */
function defaultParamFunc(name, greeting) {
    if (greeting === void 0) { greeting = "Hello"; }
    return greeting + ' ' + name + '!';
}
defaultParamFunc('Steve'); // "Hello Steve!"
defaultParamFunc('Steve', 'Hi'); //  "Hi Steve!".
defaultParamFunc('Bill'); // "Hello Bill!"
