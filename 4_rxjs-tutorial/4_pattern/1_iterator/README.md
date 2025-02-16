# Iterator Pattern

> Iterator pattern cho phép người dùng lặp qua một tập hợp các đối tượng một cách hiệu quả.

## Using Iterator

Điểm chung của lập trình thông thường là duyệt và thao tác một tập hợp các đối tượng. Các collections này có thể được lưu trữ dưới dạng một mảng hoặc có thể là một cái gì đó phức tạp hơn, chẳng hạn như cấu trúc cây hoặc đồ thị.

Iterator pattern giải quyết vấn đề này bằng cách tách tập hợp các đối tượng khỏi việc truyền tải các đối tượng này bằng cách triển khai một trình lặp chuyên dụng (tách các thuật toán ra khỏi vùng chứa).

Ngày nay, nhiều ngôn ngữ đã tích hợp sẵn Iterators bằng cách hỗ trợ các cấu trúc kiểu 'for-each' và giao diện IEnumerable và IEnumerator. Tuy nhiên, JavaScript chỉ hỗ trợ lặp cơ bản dưới dạng câu lệnh for, for-in, while và do while.

Iterator pattern cho phép các nhà phát triển JavaScript thiết kế các cấu trúc lặp linh hoạt và phức tạp hơn nhiều.

![javascript-iterator.jpg](javascript-iterator.jpg)
