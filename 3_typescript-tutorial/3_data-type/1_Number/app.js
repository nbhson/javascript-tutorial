var first = 123; // number 
var second = 0x37CF; // hexadecimal
var third = 255; // octal
var fourth = 57; // binary  
console.log(first); // 123 
console.log(second); // 14287
console.log(third); // 255
console.log(fourth); // 57 
/**
 * # toExponential()
 *    trả về ký hiệu mũ của một số ở dạng chuỗi
 *    dựa trên các chữ số phân số được chỉ định
 */
var numExponential = 123456;
console.log(numExponential.toExponential()); // 1.23456e+5
console.log(numExponential.toExponential(1)); // 1.2e+5
console.log(numExponential.toExponential(2)); // 1.23e+5
/**
 * # toFixed()
 *    trả về điểm cố định của một số ở định dạng chuỗi
 */
var numFixed = 10.8788;
console.log(numFixed.toFixed()); // 10
console.log(numFixed.toFixed(1)); // 10.9
console.log(numFixed.toFixed(2)); // 10.88
console.log(numFixed.toFixed(3)); // 10.879
console.log(numFixed.toFixed(4)); // 10.8788
/**
 * # valueOf
 *    trả về kiểu dữ liệu nguyên thủy của number
 */
var myNumber = new Number(123);
console.log(myNumber); //Output: a number object with value 123
console.log(myNumber.valueOf()); //Output: 123
console.log(typeof myNumber); //Output: object
var num2 = myNumber.valueOf();
console.log(num2); //Output: 123
console.log(typeof num2); //Output: number
