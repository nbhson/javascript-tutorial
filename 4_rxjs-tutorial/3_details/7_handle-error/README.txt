throwError: tạo err bằng một message mới (return observable)

catchError: tạo err bằng cách biến đổi error đó thành một value thông thường
    + Có thể trả về một value thông thường và completed ở observer
    + Có thể biến đổi error, và nhận về error ở observer
    + Dùng caught sẽ run lại observable đó (giống chức năng của retry), nên take(timer) để tránh lập vô tận

retry: chỉ nên xử dụng với get, sẽ chạy lại toàn bộ observable luôn

defaultIfEmpty: nếu observable return empty thì trả về giá trị mặc định

throwIfEmpty: ngược lại với defaultIfEmpty, thay vì trả về giá trị mặc định

iif: dùng như toán tử 3 ngôi cho observable