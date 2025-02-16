# RxJS Timer Operators

### Note

Chúng ta còn 8 `operators` nữa. Tuy nhiên, 8 `operators` này đi theo cặp ví dụ: `throttle/throttleTime`, `debounce/debounceTime` ... Mình sẽ chỉ nói về `*Time` thôi vì cái kia hoạt động tương tự. `throttle()` nhận vào 1 `Observable` còn `throttleTime()` nhận vào 1 khoảng thời gian trong millisecond. Phần lớn, các `*Time` operators dùng nhiều hơn là cái không có `*Time` trong công việc hàng ngày.

### throttle()/throttleTime()

`throttle<T>(durationSelector: (value: T) => SubscribableOrPromise<any>, config: ThrottleConfig = defaultThrottleConfig): MonoTypeOperatorFunction<T>`
`throttleTime<T>(duration: number, scheduler: SchedulerLike = async, config: ThrottleConfig = defaultThrottleConfig): MonoTypeOperatorFunction<T>`

`throttleTime()` nhận vào 1 tham số là `duration` có đơn vị là millisecond. Khi `Observable` gốc emit giá trị đầu tiên, `throttleTime()` sẽ emit giá trị này rồi sẽ chạy `timer` với `duration` được truyền vào. Khi `timer` đang chạy thì mọi giá trị của `Observable` gốc emit đều được bỏ qua. Khi `timer` chạy xong, `throttleTime()` quay lại trạng thái ban đầu và chờ giá trị kế tiếp của `Observable` gốc.

> `throttle` hoạt động giống nhu `throttleTime` nhưng thay vì truyền vào `duration` thì `throttle` nhận vào 1 `Observable` tượng trưng cho `durationSelector`. Khi `durationSelector` này emit (hoặc complete) thì `timer` sẽ ngưng, và `throttle` sẽ chờ giá trị tiếp theo của `Observable` gốc và quá trình này được lặp lại.

![RxJS throttleTime](assets/rxjs-throttleTime.png)

```typescript
fromEvent(document, 'mousemove')
  .pipe(throttleTime(1000))
  .subscribe(console.log, null, () => console.log('complete')); // output: MouseEvent {} - wait 1s -> MouseEvent { } - wait 1s -> MouseEvent { }
```

`throttleTime()` có thể nhận vào tham số `ThrottleConfig: {leading: boolean, trailing: boolean}` để xác định xem `throttleTime()` sẽ emit giá trị **đầu** hay giá trị **cuối** khi `timer` chạy xong. Default là `{leading: true, trailing: false}`.

`throttleTime()` thường được sử dụng khi bạn có `event` từ DOM như `mousemove` để tránh quá nhiều `event` được emit.

### debounce()/debounceTime()

`debounce<T>(durationSelector: (value: T) => SubscribableOrPromise<any>): MonoTypeOperatorFunction<T>`
`debounceTime<T>(dueTime: number, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>`

`debounceTime()` nhận vào 1 tham số là `dueTime` có đơn vị là millisecond. Khi `Observable` gốc emit giá trị, `debounceTime()` sẽ bỏ qua giá trị này và sẽ chạy `timer` với khoảng thời gian `dueTime`. `debounceTime()` sẽ bỏ qua tất cả giá trị mà `Observable` gốc emit trong khi `timer` vẫn đang chạy và sau đó `debounceTime()` sẽ chạy lại `timer`. Khi và chỉ khi `timer` được chạy hoàn chỉnh khoảng thời gian `dueTime`, `debounceTime()` sẽ emit giá trị cuối cùng mà `Observable` gốc đã emit.

> `debounce()` hoạt động giống như `debounceTime()` nhưng thay vì truyền vào `dueTime` thì `debounce` nhận vào 1 `Observable` tượng trưng cho `durationSelector`. `timer` của `debounce` sẽ hoạt động dựa trên `durationSelector` này thay vì `dueTime`

![RxJS debounceTime](assets/rxjs-debounceTime.png)

```typescript
this.filterControl.valueChanges.pipe(debounceTime(500)).subscribe(console.log); // output: type "abcd" rồi dừng 500ms -> 'abcd'
```

Vì cách hoạt động như trên, `debounceTime()` được dùng phổ biến nhất cho 1 `input` dùng để filter 1 danh sách gì đó.

### audit()/auditTime()

`audit<T>(durationSelector: (value: T) => SubscribableOrPromise<any>): MonoTypeOperatorFunction<T>`
`auditTime<T>(duration: number, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>`

`auditTime()` nhận vào 1 tham số `duration` có đơn vị là milliseconds. `auditTime()` hoạt động tương tự `throttleTime()` với `{trailing: true}`. Nghĩa là sau khi `timer` chạy và chạy xong `duration`, `auditTime()` sẽ emit giá trị gần nhất mà `Observable` gốc emit.

![RxJS auditTime](assets/rxjs-auditTime.png)

```typescript
fromEvent(document, 'click').pipe(auditTime(1000)).subscribe(console.log); // output: click - wait 1s -> MouseEvent {} -click  wait 1s (trong 1s, click 10 times) -> MouseEvent {} -> click wait 1s -> MouseEvent {}
```

### sample()/sampleTime()

`sample<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>`
`sampleTime<T>(period: number, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>`

`sampleTime()` nhận vào 1 tham số là `period` có đơn vị là millisecond. Khi `Observable` gốc được subscribe, `timer` của `sampleTime()` sẽ chạy ngay lập tức và cứ sau mỗi `period`, `sampleTime()` sẽ emit giá trị gần nhất của `Observable` gốc.

![RxJS sampleTime](assets/rxjs-sampleTime.png)

```typescript
fromEvent(document, 'click').pipe(sampleTime(1000)).subscribe(console.log); // click - wait 1s -> MouseEvent {}
```

Cả 4 `operators` này có phần hoạt động khá giống nhau ngoại trừ `debounceTime` là hơi khác biệt. Mình có 1 diagram để mô tả sự khác biệt của 4 loại `operators` này

![RxJS difference](assets/rxjs-debounce-audit-sample-throttle.png)
