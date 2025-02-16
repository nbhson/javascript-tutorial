/* OBSERVABLE */

forkJoin: tất cả phải completed thì mới chạy, nếu có 1 thằng err thì emit error (error)

combineLatest: giống forkJoin, nhưng không cần completed hết observer vẫn nhận được giá trị, nếu có 1 thằng err thì emit error (ứng dụng cho pagination) (error)

concat: theo thứ tự từng stream, thằng nào đặt trước chạy trước, thằng nào có lỗi thì chỉ bỏ qua thằng đó

merge: thằng nào emit thì show thằng đó, có 1 thằng lỗi sẽ quăng ra error (error)

race: chỉ subscribe thằng chạy trước

zip: nút áo, nếu có 1 thằng không đủ cặp, zip sẽ bỏ qua cặp đó


/* PIPE OPERATOR */

withLatestFrom: lấy giá trị của cái stream bên trong khi mà stream bên ngoài emit

startWith: lấy giá trị bên trong gắn lên đầu (giá trị luôn được trả về trước), sau đó mới trả ra giá trị bên ngoài

endWith: lấy giá trị bên trong gắn ra sau (giá trị luôn trả về sau)

pairwise: gom các value lại thành gặp array, [A, B, C] => [A, B], [B, C]