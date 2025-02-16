- HOOs là những Observable return về một Observable khác

- Thay vì phải subscible bên trong inner Observable, thì mergeAll/switchAll/concatAll sẽ tự động subscible inner Observable
và trả về giá trị để outer Observable có thể subscible được

 + mergeAll: có bao nhiêu inner Observable nó sẽ chạy bấy nhiêu lần. Chỉ cần có emit thì data sẽ được bắn đi liên tục và chạy đồng thời. 
    Nên dùng mergeAll(number) dùng để giới hạn số lượng stream chạy đồng thời (lúc này sẽ hoạt động như concatAll)
 + concatAll: chạy lần lượt theo thứ tự, đảm bảo subscribe vào Observable tiếp theo sau khi Observable đầu tiền Completed
 + switchAll: nếu inner observable emit tín hiệu, thì inner Observable trước đó sẽ bị cancel (unsubscribe inner observable cũ)

- Cú pháp map + mergeAll/concatAll/switchAll được dùng đi dùng lại quá nhiều, nên sinh ra 3 thằng viết ngắn hơn
 + mergeMap = mergeAll + map
 + concatMap = concatAll + map
 + switchMap = switchAll + map

- Thay vì phải truyền vào function "() =>" thì mergeMapTo/concatMapTo/switchMapTo là cách viết ngắn gọn hơn

- exhaustMap: chỉ chạy observable đầu tiên, những thằng còn lại sẽ bị cancel. Khi observable đầu tiên Completed, thì mới có thể chạy observable được sinh ra mới tiếp theo (không phải observable được cancel)

this.queryControl.valueChanges
.pipe(
    debounceTime(500),
    map(qr => {
        this.userService.getAll(qr)
    }),
    switchAll()
)
.subscribe(console.log(users))

Khi chuyển thành switchMap

this.queryControl.valueChanges
.pipe(
    debounceTime(500),
    switchMap(qr => {
        this.userService.getAll(qr)
    })
)
.subscribe(console.log(users))


> Dùng Promise thì switchAll không thể cancel được => nên dùng "switchMap" để thay thế