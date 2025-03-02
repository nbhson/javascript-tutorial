# DOM Manipulation

## DOM Manipulation là gì
- DOM là một biểu diễn cấu trúc cây của trang web, trong đó mỗi phần tử trang web được biểu diễn bằng một đối tượng trong DOM.

> `JS DOM Manipulation` (JavaScript Document Object Model Manipulation) là `quá trình thay đổi cấu trúc, nội dung và kiểu dáng của trang web` thông qua tương tác với DOM bằng JavaScript. 

## Lợi ích
- Độ linh hoạt cao: Các phương thức DOM manipulation truyền thống như document.getElementById, element.appendChild,... rất linh hoạt và dễ sử dụng.
    - Tương Tác Người Dùng: *JS DOM manipulation cho phép tạo ra trải nghiệm tương tác tốt hơn với người dùng. Các sự kiện như click, hover, và submit có thể kích thích thay đổi nhanh chóng trên trang web mà không cần phải tải lại toàn bộ trang.*
    - Thời Gian Phản Hồi Nhanh: *JS DOM manipulation giúp thực hiện các hành động và thay đổi trạng thái một cách nhanh chóng, tạo ra thời gian phản hồi người dùng ngắn.*
    Tương Thích Mọi Trình Duyệt: *Được hỗ trợ rộng rãi trong các trình duyệt và không yêu cầu các công nghệ hay framework khác.*

# Hạn chế 
- `Hiệu suất`: Nếu không được sử dụng đúng cách, việc thực hiện nhiều DOM manipulation có thể ảnh hưởng đến hiệu suất của trang web, đặc biệt là trên các thiết bị có tài nguyên hạn chế.
    - `Thực Hiện Nhiều DOM Manipulation Không Cần Thiết`: *Nếu thực hiện quá nhiều DOM manipulation mà không cần thiết, đặc biệt là trong các vòng lặp lớn, có thể gây ra hiệu suất kém vì mỗi lần manipulation đều kích thích các quá trình render lại và reflow.*
    - `Gắn Quá Nhiều Sự Kiện Người Dùng`: *Hiệu Suất Kém: Gắn liền quá nhiều sự kiện người dùng, đặc biệt là trong các ứng dụng lớn, có thể gây ra hiệu suất kém do lắng nghe quá nhiều sự kiện và tăng thiết lập xử lý sự kiện.*

- `Khả năng bảo trì`: Khi mã JavaScript liên quan đến DOM trở nên phức tạp, việc bảo trì và quản lý mã có thể trở nên khó khăn.
- `Tương Tác Với Trình Duyệt`: Các trình duyệt có thể xử lý DOM manipulation khác nhau một cách khác nhau, đôi khi gây ra sự không nhất quán trong trải nghiệm người dùng.

## References
- DOM Manipulation: <https://github.com/kathleengraham/javascript-and-dom-manipulation>
- Khả năng tương thích của các tính năng và API web trên các trình duyệt khác nhau: 
    - <https://caniuse.com/>