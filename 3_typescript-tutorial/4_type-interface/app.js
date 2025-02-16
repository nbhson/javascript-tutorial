/**
 * # Type interface
 *  Khi khai báo biến và gán giá trị mà không khai báo kiểu dữ liệu
 *  Thì TS sẽ tự động đoán kiểu dữ liệu của biến đó là gì
 */
var color = 'red'; // TS sẽ tự đoán và gán kiểu dữ liệu string cho biến color
color = 'blue'; // nếu muốn thay đổi giá trị thì bắt buộc cũng phải là 1 string
// color = 123 // Error nếu cố ý gán giá trị với kiểu dữ liệu khác
