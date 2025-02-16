# merge: biến nhiều observable thành 1 observable (nhiều thằng chạy đồng thời),

tham số thứ 3 để xác định cho bao nhiêu thằng chạy đồng thời,
thằng nào đặt trước thì chạy trước

# concat: tinh năng như merge nhưng ngắn gọn hơn

# combineLatest: chỉ cần 1 thằng trong đống stream thay đổi,

thì những thằng init giá trị rồi sẽ chạy những thằng trong subscribe ?
(ông này bắn ra value , ông kia cũng bắn ra value thì giá trị mới nhất của 2 thằng sẽ cộng tuần tự với nhau ?)

# zip: (ví dụ nút áo) gần như tương tự combineLatest, zip sẽ đánh theo index,

vd index stream 1 đã phát sinh ra dữ liệu rồi thì nó sẽ đợi thằng stream 2.
Rồi 2 thằng kết hợp với nhau

# race: ví dụ có 3 steam, thì thằng nào phát sinh dữ liệu đầu tiên thì chỉ lấy thằng đó

2 thằng kia BỎ QUA

# mergeMap, mergeAll: xử lí cho higher orther observable (chạy đồng thời)

# switchMap: nếu thằng đằng sau phát sinh event thì nó sẽ cancel thằng đằng trước

# debounceTime: trong thời gian bao lâu đó mới gửi đi

# throttleTime: gần giống với debounceTime

# distinctUntilChanged: tránh việc gửi đi data giống nhau trước đó,

không emit đi khi giá trị hiện tại giống với giá trị trước đó
