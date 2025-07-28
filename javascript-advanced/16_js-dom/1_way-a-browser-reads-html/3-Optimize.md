# Optimize 

## Speeding Up - CSS & JS Delivery
- If you want DOM to get parsed as fast as possible after the user had requested the page, some things you could do is turn your `javascript asynchronous` and `optimize loading of stylesheets`
- To make pages load faster, limit the size of the data (HTML markup, images, CSS, JavaScript) that is needed to render the first content of your page. There are several ways to do this:
    - Cấu trúc HTML của bạn để tải nội dung quan trọng, trong màn hình đầu tiên trước tiên:
        - Tải nội dung chính của trang của bạn đầu tiên. Cấu trúc trang của bạn sao cho phản hồi ban đầu từ máy chủ của bạn sẽ gửi dữ liệu cần thiết để hiển thị ngay phần quan trọng của trang và trì hoãn phần còn lại.
        - Điều này có thể có nghĩa là bạn phải chia CSS của mình thành hai phần: phần nội tuyến `chịu trách nhiệm tạo kiểu cho phần hiển thị của nội dung` và phần `có thể được trì hoãn`.
    - Giảm lượng dữ liệu được sử dụng bởi tài nguyên của bạn
        - Giảm thiểu tài nguyên: HTML
        - Cân nhắc sử dụng CSS thay vì hình ảnh nếu có thể
        - Bật nén

## Optimize CSS Delivery
- **Tổng quan**: Trước khi trình duyệt có thể hiển thị nội dung, nó phải xử lý tất cả thông tin về kiểu dáng và bố cục cho trang hiện tại. Do đó, trình duyệt sẽ chặn hiển thị cho đến khi các bảng định kiểu bên ngoài được tải xuống và xử lý, điều này có thể yêu cầu nhiều lần thực hiện và trì hoãn thời gian hiển thị lần đầu.
- **Khuyến nghị**
    - Nếu tài nguyên CSS bên ngoài nhỏ, bạn có thể chèn chúng trực tiếp vào tài liệu HTML, được gọi là nội tuyến.
    - Lưu ý rằng nếu tệp CSS lớn, việc nội tuyến hoàn toàn CSS có thể khiến PageSpeed ​​Insights cảnh báo rằng phần trong màn hình đầu tiên của trang của bạn quá lớn.
    - Trong trường hợp tệp CSS lớn, bạn sẽ cần xác định và nội tuyến CSS cần thiết để hiển thị nội dung trong màn hình đầu tiên và trì hoãn tải các kiểu còn lại cho đến sau nội dung trong màn hình đầu tiên.
    - Don't inline large data URIs
    - Don’t inline CSS attributes

## Optimize JS Delivery
- **Tổng quan**: Bất kỳ tập lệnh nào cũng có thể chèn HTML của riêng nó thông qua document.write() hoặc các thao tác DOM khác. Điều này ngụ ý rằng trình phân tích cú pháp phải đợi cho đến khi tập lệnh được tải xuống và thực thi trước khi nó có thể phân tích cú pháp phần còn lại của tài liệu một cách an toàn. *Vì vậy, câu hỏi lớn xuất hiện trong đầu là Bạn có thể đặt thẻ tập lệnh javascript của mình ở đâu và tại sao?*
- **Khuyến nghị**: Cách tiếp cận cũ để giải quyết vấn đề này là đặt `script` các thẻ ở cuối `body`, vì điều này đảm bảo trình phân tích cú pháp không bị chặn cho đến cuối cùng.
    - **Cách tiếp cận này có vấn đề riêng**: the browser cannot start downloading the scripts until the entire document is parsed. For larger websites with large scripts & stylesheets, việc có thể tải xuống tập lệnh càng sớm càng tốt là rất quan trọng đối với hiệu suất.
    - Trong một giải pháp tối ưu, trình duyệt sẽ bắt đầu tải xuống tập lệnh của bạn càng sớm càng tốt, đồng thời phân tích cú pháp phần còn lại của tài liệu.

> Cách tiếp cận hiện đại Ngày nay, các trình duyệt hỗ trợ các thuộc tính async và defer trên tập lệnh. Các thuộc tính này cho trình duyệt biết rằng việc tiếp tục phân tích cú pháp trong khi tập lệnh đang được tải xuống là an toàn.

### async
- Các tập lệnh có thuộc tính async được thực thi không đồng bộ.
- Điều này có nghĩa là tập lệnh được thực thi ngay khi được tải xuống
- Điều này ngụ ý rằng có thể tập lệnh 2 được tải xuống và thực thi trước tập lệnh 1. 

```html
<script type="text/javascript" src="path/to/script1.js" async></script> 
<script type="text/javascript" src="path/to/script2.js" async></script>
```

### defer
- Các tập lệnh có thuộc tính defer được thực thi theo thứ tự (tức là đầu tiên là tập lệnh 1. Sau đó là tập lệnh 2). Điều này cũng không chặn trình duyệt.
- Không giống như tập lệnh không đồng bộ, tập lệnh trì hoãn chỉ được thực thi sau khi toàn bộ tài liệu được tải.
- An important note on browser compatibility: in some circumstances IE <= 9 may execute deferred scripts out of order. If you need to support those browsers, please read this first!

```html
<script type="text/javascript" src="path/to/script1.js" defer></script>
<script type="text/javascript" src="path/to/script2.js" defer></script>
```

## References

- Optimize: <https://gist.github.com/nishantmendiratta/db09531f80803465da36f0d43c3e58ac>