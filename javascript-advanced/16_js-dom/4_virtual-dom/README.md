# Virtual DOM

Thao tác DOM thủ công rất lộn xộn và việc theo dõi trạng thái DOM trước đó rất khó khăn. Giải pháp cho vấn đề này là viết mã của bạn như thể bạn đang tạo lại toàn bộ DOM bất cứ khi nào trạng thái thay đổi. Tất nhiên, nếu bạn thực sự tạo lại toàn bộ DOM mỗi khi trạng thái ứng dụng thay đổi, ứng dụng của bạn sẽ rất chậm

`virtual-dom` là tập hợp các mô-đun được thiết kế để cung cấp cách khai báo biểu diễn DOM cho ứng dụng của bạn. Vì vậy, thay vì cập nhật DOM khi trạng thái ứng dụng của bạn thay đổi, bạn chỉ cần tạo một cây ảo hoặc `VTree`, trông giống như trạng thái DOM mà bạn muốn. `virtual-dom` sau đó sẽ tìm ra cách làm cho DOM trông như thế này một cách hiệu quả mà không cần tạo lại tất cả các nút DOM.

> `Virtual DOM` (Document Object Model) là một khái niệm được sử dụng trong các thư viện và framework JavaScript để cải thiện hiệu suất và hiệu quả khi làm việc với giao diện người dùng.

Khi bạn phát triển ứng dụng web, thay đổi trạng thái của ứng dụng có thể dẫn đến sự thay đổi trong cấu trúc HTML. Thay vì thực hiện những thay đổi này trực tiếp trên DOM thực tế (real DOM), một số thư viện như React sử dụng một bản sao ảo của DOM, được gọi là Virtual DOM.

## Quy trình hoạt động của Virtual DOM như sau
- `Tạo Virtual DOM`: *Khi trạng thái của ứng dụng thay đổi, một bản sao ảo của DOM được tạo ra. Đây là một cây DOM ảo chỉ tồn tại trong bộ nhớ.*
- `So sánh Virtual DOM`: *So sánh Virtual DOM mới với Virtual DOM cũ để xác định sự khác biệt (diffing). Thực hiện diffing giữa hai cây DOM giúp xác định những phần nào của DOM cần được cập nhật*
- `Tính toán thay đổi`: *Dựa trên kết quả diffing, tính toán những thay đổi cần áp dụng lên DOM thực tế.*
- `Cập nhật DOM thực tế`: *Áp dụng những thay đổi tính toán được lên DOM thực tế. Điều này giúp giảm thiểu số lượng thao tác trực tiếp trên DOM, làm giảm tải cho trình duyệt và cải thiện hiệu suất.*

## Lợi ích
- `Tăng hiệu suất`: Virtual DOM giúp giảm tải cho trình duyệt bằng cách tối ưu hóa quá trình cập nhật DOM. Thay vì cập nhật trực tiếp trên DOM thực tế, chỉ có những phần thay đổi mới được áp dụng, giảm thiểu việc render toàn bộ giao diện.
- `Tăng trải nghiệm người dùng`: Hiệu suất tốt hơn có nghĩa là trải nghiệm người dùng được cải thiện. Ứng dụng có thể đáp ứng nhanh chóng với sự tương tác của người dùng mà không có hiện tượng giật lag.
- `Quản lý trạng thái dễ dàng hơn`: Virtual DOM thường đi kèm với mô hình quản lý trạng thái (state management), giúp quản lý trạng thái ứng dụng một cách hiệu quả và dễ dàng hơn.
- `Tích hợp dễ dàng với các thư viện và framework`: Nhiều thư viện và framework JavaScript hiện đại như React sử dụng Virtual DOM, giúp tăng tính tương thích và tích hợp dễ dàng.

## Hạn chế của Virtual DOM
- `Tăng overhead`: Sử dụng Virtual DOM đôi khi có thể tăng overhead bởi vì cần có sự xử lý thêm để quản lý Virtual DOM và thực hiện quá trình diffing.
    - *Sử dụng Virtual DOM đôi khi có thể tăng overhead. Quá trình tạo, so sánh và cập nhật Virtual DOM đòi hỏi tài nguyên CPU và bộ nhớ.*
- `Khả năng triệt hạng hiệu suất`: Mặc dù Virtual DOM giúp cải thiện hiệu suất, nhưng trong một số trường hợp, nó có thể không hiệu quả như khi ứng dụng không phức tạp hoặc khi sử dụng các phương pháp tối ưu hóa khác.
- `Khả năng phức tạp của codebase`: Sử dụng Virtual DOM có thể làm cho codebase trở nên phức tạp hơn so với việc thao tác trực tiếp với DOM, đặc biệt là đối với những người mới học và hiểu về khái niệm này.
    - *Sử dụng Virtual DOM có thể làm cho codebase trở nên phức tạp hơn. Cần phải hiểu rõ về cách Virtual DOM hoạt động và làm thế nào để tối ưu hóa quá trình render.*

## References
- Virtual DOM: <https://github.com/Matt-Esch/virtual-dom>