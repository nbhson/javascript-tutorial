// JSON - JavaScript Object Notation
// Là một định dạng dữ liệu (chuỗi)
// JSON: string, number, boolean, null, array, object

// Mã hóa (encode) / Giải mã (decode)
// Stringify: js type -> json
// Parse: json -> js type

var jsonString = "string";
var jsonNumber = "23";
var jsonBoolean = "true";
var jsonNull = "null";
var jsonArr = '["Son","23"]';
var jsonObj = '{"name":"Son", "Age": 23}';

var numberType = JSON.parse(jsonNumber);
console.log(numberType); // 23, typeof number

var numberJson = JSON.stringify(numberType);
console.log(numberJson); // 23, typeof string

var arrayType = JSON.parse(jsonArr);
console.log(arrayType); // typeof object

var arrayJson = JSON.stringify(arrayType);
console.log(arrayJson); // typeof string

var arr = {
  name: "Sơn",
  age: 23,
};
console.log(typeof arr); // typeof object
console.log(JSON.stringify(arr)); // typeof string
