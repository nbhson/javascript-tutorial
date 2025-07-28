# DOM Summary

## DOM Manipulation

- `Khái niệm`: Đây là quá trình trực tiếp thay đổi và tương tác với DOM thực tế trên trình duyệt.
- `Cách thức hoạt động`: Các phương thức như getElementById, appendChild, innerHTML, và các phương thức khác được sử dụng để thêm, sửa đổi hoặc xóa trực tiếp các phần tử trong cây DOM.
- `Hiệu suất`: Có thể gây ra hiệu suất kém nếu thực hiện nhiều thay đổi trực tiếp trên DOM, đặc biệt là trong các ứng dụng lớn và phức tạp.

- Một số điểm quan trọng về zone.js và Angular:
  - Change Detection
  - Binding Dữ Liệu Hai Chiều (Two-Way Data Binding)
  - Error Handling

## Virtual DOM

- `Khái niệm`: Đây là một biểu diễn **ảo** của cây DOM thực tế được lưu trữ trong bộ nhớ. Là một kỹ thuật được sử dụng trong các framework như React để tối ưu hóa quá trình cập nhật DOM.
- `Cách thức hoạt động`: Các thay đổi trong ứng dụng không được áp dụng trực tiếp lên DOM thực tế mà thay vào đó, được áp dụng trên Virtual DOM. Sau đó, Virtual DOM so sánh với DOM thực tế để xác định những thay đổi cần được áp dụng và chỉ cập nhật những phần thay đổi đó.
- `Hiệu suất`: Giúp tối ưu hóa hiệu suất bằng cách giảm số lượng thao tác trực tiếp trên DOM và chỉ cập nhật những phần thay đổi cần thiết.

## Shadow DOM:

- `Khái niệm`: Là một phần của Web Components, giúp tạo ra các phạm vi cục bộ và cô lập CSS và DOM.
- `Cách thức hoạt động`: Cung cấp một cơ chế để tạo ra một phạm vi cô lập nơi mà CSS và DOM của một phần tử không bị ảnh hưởng bởi các quy tắc CSS và DOM bên ngoài.
- `Hiệu suất`: Mục tiêu chính không phải là tối ưu hóa cập nhật DOM mà là cung cấp tính cô lập và tái sử dụng.

Tóm tắt sự khác biệt:

- **Virtual DOM**: Tập trung vào tối ưu hóa cập nhật DOM và giảm thiểu thao tác trực tiếp trên DOM để tăng hiệu suất.
- **Shadow DOM**: Tập trung vào việc cô lập và tái sử dụng các phần tử, giúp tránh xung đột CSS và DOM bên ngoài và tạo ra một phạm vi cục bộ cho các phần tử.

## Trường hợp sử dụng

### Trường Hợp Sử Dụng DOM Manipulation

- `Ứng Dụng Nhỏ và Đơn Giản`: Trong những ứng dụng nhỏ và đơn giản, việc tương tác trực tiếp với DOM có thể dễ dàng và linh hoạt hơn.
- `Chỉnh Sửa Trạng Thái DOM Tức Thì`: Khi bạn cần thực hiện các thay đổi trong trạng thái DOM ngay lập tức và không muốn đợi quá trình change detection của các framework.
- `Dự Án Mới và Không Phức Tạp`: Trong các dự án mới, đặc biệt là những dự án không phức tạp, việc sử dụng tương tác trực tiếp có thể giảm độ phức tạp và giúp tăng tốc quá trình phát triển.

### Trường Hợp Sử Dụng Virtual DOM

- `Ứng Dụng Web Phức Tạp và Độ Phản Ứng Cao`: Trong các ứng dụng web phức tạp với nhiều thành phần và tương tác người dùng, Virtual DOM giúp quản lý hiệu suất bằng cách chỉ cập nhật những phần thay đổi thực sự, giảm tải cho DOM thực trực tiếp.
  Tương Tác Hai Chiều Dữ Liệu (Two-Way Data Binding):
- `Các framework sử dụng Virtual DOM`: thường hỗ trợ two-way data binding, giúp tự động đồng bộ hóa giữa mô hình dữ liệu và giao diện người dùng mà không cần tương tác trực tiếp với DOM.
  Ứng Dụng Đa Nền Tảng (Cross-Platform Applications):
- `Virtual DOM` giúp quản lý sự đồng bộ hóa trạng thái ứng dụng trên nhiều nền tảng một cách hiệu quả, giảm sự phức tạp khi phát triển cho nhiều môi trường.

### Trường Hợp Sử Dụng Shadow DOM

- `Web Components`: Shadow DOM là một phần quan trọng của tiêu chuẩn Web Components. Nó giúp cô lập CSS và JavaScript của một phần tử, ngăn chặn ảnh hưởng từ và đến phần tử này.
- `Bảo Mật và An Toàn`:
  - Shadow DOM có thể giúp tăng cường bảo mật bằng cách giữ cho một phần của DOM và CSS không thể truy cập được từ bên ngoài.
  - Khi tích hợp các thành phần từ bên ngoài (ví dụ: thư viện UI từ bên thứ ba), Shadow DOM giúp tránh tình trạng CSS bleed và xung đột.
