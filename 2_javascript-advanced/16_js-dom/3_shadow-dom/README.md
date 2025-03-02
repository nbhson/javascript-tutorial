# Shadow DOM

## What is the Shadow DOM

`Shadow DOM` là một công nghệ trong web development giúp tạo ra một phạm vi cục bộ và đóng gói các thành phần của giao diện người dùng (UI) trong một hộp đen, không bị ảnh hưởng từ các phần khác của trang web. Nó cung cấp một cách để che giấu và bảo vệ các chi tiết cài đặt và CSS của một thành phần, ngăn chúng bị ảnh hưởng bởi các phần khác của trang web, và ngược lại.

Shadow DOM bao gồm các phần sau:

- `Shadow Host`: Đây là phần của DOM nơi mà Shadow DOM được áp dụng. Nó là một phần tử bình thường của trang web.
- `Shadow Tree`: Đây là cây DOM ẩn chứa các phần tử và nội dung của Shadow DOM. Nó không được truy cập trực tiếp từ bên ngoài Shadow DOM.
- `Shadow Boundary`: Đây là ranh giới giữa Shadow DOM và phần còn lại của trang web. Nội dung trong Shadow DOM không bị ảnh hưởng bởi CSS hoặc JavaScript bên ngoài của nó.

> Sử dụng `Shadow DOM`, bạn có thể tạo ra các thành phần có thể **tái sử dụng một cách độc lập**, mà không phải lo lắng về sự xung đột với các phần khác của trang web. Nó đặc biệt hữu ích khi xây dựng các thư viện hoặc framework UI, nơi mà việc đảm bảo tính độc lập và độ cô lập của các thành phần là quan trọng.

## Lợi ích

- `Tính Cô Lập` (Encapsulation): Shadow DOM giúp đảm bảo rằng CSS và JavaScript trong một Shadow DOM không tác động đến các phần khác của trang web và ngược lại. Điều này giữ cho mã nguồn của các thành phần được giữ cục bộ và độc lập.
- `Bảo Mật`: Shadow DOM giúp bảo vệ mã nguồn và kiểu của thành phần khỏi sự can thiệp bên ngoài, cung cấp một lớp bảo mật cho các thành phần quan trọng.

# Hạn chế

- `Tương Tác Khó Khăn`: Do sự cô lập, việc tương tác giữa các thành phần trong và ngoài Shadow DOM có thể trở nên phức tạp, đặc biệt là khi cần truyền dữ liệu hoặc sự kiện giữa chúng

## Hiệu Xuất

- `Hiệu Suất Tốt`: Shadow DOM thường được thiết kế để cải thiện hiệu suất bằng cách giảm bớt sự can thiệp từ bên ngoài và giúp trình duyệt render nhanh hơn.
  - `Shadow DOM` giảm bớt sự can thiệp từ bên ngoài, giúp trình duyệt dễ dàng quyết định cách render và vẽ các thành phần bên trong một Shadow DOM. Điều này có thể dẫn đến thời gian render ngắn hơn, đặc biệt là khi có nhiều thành phần được sử dụng trên một trang web.
- `Cách Quản Lý Nội Dung Hiệu Quả`: Các phần tử bên trong Shadow DOM không tương tác trực tiếp với các phần tử khác ngoài Shadow DOM, giúp quản lý nội dung một cách hiệu quả hơn.

## References

- Shadow DOM: <https://github.com/praveenpuglia/shadow-dom-in-depth>
