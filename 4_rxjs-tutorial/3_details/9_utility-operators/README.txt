- tap: 
  + Log giá trị được emit ở bất cứ thời điểm nào trong Observable. Điều này giúp debug được giá trị của 1 Observable trước và sau khi dùng 1 operator nào đó.
  + Tap sẽ không làm thay đổi/ảnh hưởng gì đến value stream (không side effect)
  + Dùng để side effect thì sẽ thay đổi giá trị của stream (cẩn thận khi sử dụng - vì nó nhận được giá trị return của pipe trước đó)

- finalize:
  + Chạy khi Observable error hoặc completed
  + Không dùng để debug vì ko nhận được tham số từ pipe trước đó
  + Vì nó chạy khi error hoặc complete, nên những cái như loading có thể viết ở đây (tránh việc 2 lần vì cả 2 đều cần loading = false)

- delay: 
  + delay observer trong khoảng thời gian bao lâu

- repeat:
  + lập lại cái stream bao nhiêu lần
  + khác với retry khi nào có error mới chạy lại cái stream

- timeInterval:
  + biết được khoảng thời gian emit giữa 2 lần là bao lâu

- timeout:
  + sẽ throwError khi trong  khoảng thời gian quy định không emit được giá trị

- toPromise:
  + Chuyển Observable thành Promise
  + Sử dụng để async/await