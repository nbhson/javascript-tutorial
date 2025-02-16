/**
 * # Union
 *    cho phép sử dụng nhiều hơn 1 kiểu dữ liệu
 *    cho một biến hoặc 1 tham số hàm
 */
/** Variable */
var code;
code = 1;
code = "string";
/** Function */
function displayType(code) {
    if (typeof code === "number")
        console.log("Code is number.");
    else if (typeof code === "string")
        console.log("Code is string.");
}
displayType(123); // Output: Code is number.
displayType("ABC"); // Output: Code is string.
// displayType(true); //Compiler Error: Argument of type 'true' is not assignable to a parameter of type string | number
