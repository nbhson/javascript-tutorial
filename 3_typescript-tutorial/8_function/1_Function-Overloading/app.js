/**
 * # Function overloading
 *    TypeScript cung cấp khái niệm nạp chồng hàm.
 *    Bạn có thể có nhiều hàm có cùng tên nhưng kiểu tham số và kiểu trả về khác nhau.
 *    Tuy nhiên, số lượng các tham số phải giống nhau.
 */
function add(a, b) {
    return a + b;
}
add("Hello ", "Steve"); // returns "Hello Steve"
add(10, 20); // returns 30
