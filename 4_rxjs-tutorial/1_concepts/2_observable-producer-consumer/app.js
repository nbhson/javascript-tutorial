/**
 * Promise    : 
 *    Là object hỗ trợ sẵn trong JS.
 * Observable : 
 *    - Là object chưa hỗ trợ sẵn, người dùng phải tự định nghĩa
 *      hoặc sử dụng những thư viện liên quan.
 *    - Là một object đại diện cho tập hợp nhiều giá trị, events,...
 *      được gửi đến tương lai.
 *    - Tất cả mô hình theo dạng Producer quản lí và gửi dữ liệu,
 *      events tới Consumer đều có thể áp dụng với Observable Pattern
 *    - Được sinh ra:
 *          + Để chuẩn hóa các mô hình Producer (sáng tạo nội dung) - Consumer (người xem nội dung) với cùng 
 *            một API giống nhau và cùng một cơ chế xử lí
 *          + Bù đắp những thiếu sót của những mô hình trong JS
 */

// Producer: người quản lí/cung cấp dữ liệu, events,...
// Consumer: là người chủ động đăng kí để lấy dữ liệu

function next()  {
  console.log('Hello');
}

setTimeout(next, 1000) 
// => chỉ xử lí success, không có error và completed