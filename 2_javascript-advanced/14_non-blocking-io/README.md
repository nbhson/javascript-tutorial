# None-blocking IO là gì?

> None-blocking IO có nghĩa là xử lý đa luồng. Thao tác A sẽ không bị phụ thuộc hoàn toàn vào thao tác B. 

Ví dụ trong hệ điều hành Window là xử lý đa luồng vì bạn có thể chạy nhiều chương trình cùng một lúc, thực hiện nhiều thao tác copy và xóa cho dù thao tác trước nó chưa hoàn thành. 

> None-blocking IO là khái niệm trái ngược hoàn toàn với blocking IO, bởi vì blocking IO chỉ là xử lý đơn luồng.

Trong Javascript là lập trình Blocking IO nên nó hỗ trợ thêm cơ chế bất đồng bộ (Asynchronous) và sự kiện để khắc phục khuyết điểm này.

Đấy cũng là một cái hay bởi vì nếu ta xử lý nhiều luồng quá thì sẽ dẫn đến tốn tài nguyên của hệ thống, với lập trình sự kiện chỉ khi nào có tác động thì mới xử lý thêm.