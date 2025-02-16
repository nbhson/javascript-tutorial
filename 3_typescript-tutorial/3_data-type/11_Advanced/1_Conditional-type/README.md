# Conditional Type 

- `Conditional Type` có mặt trong TS từ version 2.8 và có thể nói đây là một trong những tính năng nổi bật nhất của TS. - `Conditional Type`, đúng như tên gọi của nó, giúp cho chúng ta có thể tạo ra những type theo điều kiện. Điều này dẫn đến 1 hệ thống type cực kỳ linh hoạt (robust) mà TS mang lại cho người dùng. Ví dụ:

```bash
T extends U ? X : Y;
```
Đoạn code trên có thể hiểu nôm na là khi type T có thể gán được cho type U thì sẽ trả về type X, còn không thì trả về type Y.