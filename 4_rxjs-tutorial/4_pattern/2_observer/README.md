# Observer Pattern

> Observer patter cung cấp một mô hình đăng ký (subscription) trong đó các đối tượng đăng ký một sự kiện và nhận thông báo khi sự kiện xảy ra. Mô hình này là nền tảng của lập trình theo hướng sự kiện, bao gồm cả JavaScript.

## Using Observer

Khi xây dựng ứng dụng web, bạn phải viết nhiều trình xử lý sự kiện. Trình xử lý sự kiện là các chức năng sẽ được thông báo khi một sự kiện được kích hoạt.

Sự kiện và mô hình xử lý sự kiện trong JavaScript là thể hiện của Observer pattern.

![javascript-observer.jpg](javascript-observer.jpg)

Trong RxJS, một đối tượng có tên Subject lưu giữ danh sách Listeners đã đăng ký với nó. Bất cứ khi nào trạng thái Subject thay đổi (bắn đi event), nó sẽ thông báo cho tất cả các Listeners của nó (multicasting)