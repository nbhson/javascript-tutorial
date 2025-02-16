# RxJS Utility Operators

## Utility Operators

Đúng với tên gọi, đây là những operators cung cấp 1 số tiện ích cho chúng ta mà đôi khi rất hiệu quả.

#### tap()

`tap<T>(nextOrObserver?: NextObserver<T> | ErrorObserver<T> | CompletionObserver<T> | ((x: T) => void), error?: (e: any) => void, complete?: () => void): MonoTypeOperatorFunction<T>`

Ngoài hàm `subscribe` thì chắc `tap()` là 1 trong những operator được dùng nhiều nhất trong **RxJS**. `tap()` là 1 operator mà các bạn có thể `pipe` vào bất cứ `Observable` nào và tại bất cứ vị trí nào. `tap()` nhận vào tham số giống như `subscribe` đó là `Observer` hoặc là 3 functions `nextFunction`, `errorFunction`, và `completeFunction`. Vì nhận vào tham số giống `subscribe`, nên bản chất `tap()` không trả về giá trị gì. Điều này nghĩa là `tap()` hoàn toàn không làm thay đổi bất cứ gì trên 1 `Observable`. Các bạn có thể dùng `tap()` để:

> Dùng để debug Log giá trị được emit ở bất cứ thời điểm nào trong Observable. Điều này giúp debug được giá trị của 1 Observable trước và sau khi dùng 1 operator nào đó.

```ts
interval(1000)
  .pipe(
    tap((val) => console.log('before map', val)),
    map((val) => val * 2),
    tap((val) => console.log('after map', val))
  )
  .subscribe();

// before map: 0
// after map: 0

// before map: 1
// after map: 2

// before map: 2
// after map: 4
// ...
```

2. Để thực thi 1 nghiệp vụ nào đó mà nghiệp vụ sử dụng giá trị của `Observable` emit và mutate giá trị đó. Việc này được coi là side effect đối với `Observable` hiện tại
3. Để thực thi 1 nghiệp vụ nào đó mà hoàn toàn không liên quan đến giá trị mà `Observable` emit. Ví dụ, để **start/stop** loader.

#### delay()/delayWhen()

`delay<T>(delay: number | Date, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>`

`delay()` khá là dễ hiểu, chỉ là delay giá trị emit của 1 `Observable` nào đó dựa vào tham số truyền vào. Nếu như tham số truyền vào là `Number`, thì `delay()` sẽ chạy 1 timer với khoảng thời gian là tham số, sau đó sẽ emit giá trị của `Observable`. Nếu như tham số truyền vào là `Date`, thì `delay()` sẽ **hoãn** giá trị emit tới khi thời gian hiện tại bằng với `Date` được truyền vào.

![RxJS delay](assets/rxjs-delay.png)

```ts
fromEvent(document, 'click').pipe(delay(1000)).subscribe(console.log);

// click
// 1s -- MouseEvent
// click
// 1s -- MouseEvent
```

`delayWhen<T>(delayDurationSelector: (value: T, index: number) => Observable<any>, subscriptionDelay?: Observable<any>): MonoTypeOperatorFunction<T>`

`delayWhen()` tính chất hoạt động giống như `delay()` nhưng thay vì truyền vào khoảng thời gian `Number` hoặc ngày `Date`, thì chúng ta truyền vào 1 function mà trả về 1 `Observable`. `delayWhen()` sẽ **hoãn** emit giá trị của `Source Observable` cho đến khi `Observable` truyền vào emit.

![RxJS delayWhen](assets/rxjs-delayWhen.png)

```ts
fromEvent(document, 'click')
  .pipe(delayWhen(() => timer(1000)))
  .subscribe(console.log);
// click
// 1s -- MouseEvent
// click
// 1s -- MouseEvent
```

#### finalize()

`finalize<T>(callback: () => void): MonoTypeOperatorFunction<T>`

`finalize()` rất đơn giản là 1 operator mà sẽ nhận vào 1 `callback`. `callback` này sẽ được thực thi khi `Observable` complete **hoặc** error. 
Use-case thường gặp nhất của `finalize()` chính là **stop loader/spinner**, vì chúng ta sẽ muốn cái loader/spinner dừng lại/không hiển thị khi 1 API Request thực hiện xong, cho dù có lỗi hay không có lỗi.

```ts
this.loading = true;
this.apiService
  .get()
  .pipe(finalize(() => (this.loading = false)))
  .subscribe();
```

#### repeat()

`repeat<T>(count: number = -1): MonoTypeOperatorFunction<T>`

`repeat()`, đúng như tên gọi, sẽ nhận vào tham số `count` và sẽ lặp lại `Source Observable` đúng với số `count` mà được truyền vào.

![RxJS repeat](assets/rxjs-repeat.png)

```ts
of('repeated data').pipe(repeat(3)).subscribe(console.log);
// 'repeated data'
// 'repeated data'
// 'repeated data'
```

#### timeInterval()

`timeInterval<T>(scheduler: SchedulerLike = async): OperatorFunction<T, TimeInterval<T>>`

`timeInterval()` dùng để đo khoảng thời gian giữa 2 lần emit của `Source Observable`. Ví dụ là tính thời gian giữa 2 lần click của người dùng. `timerInterval()` sẽ chạy timer ở thời điểm `Observable` được `subscribe`. Nghĩa là khi bắt đầu `subscribe` cho đến lúc có giá trị đầu tiên được emit, thì `timeInterval()` sẽ track được khoảng thời gian này.

![RxJS timeInterval](assets/rxjs-timeInterval.png)

```ts
fromEvent(document, 'click').pipe(timeInterval()).subscribe(console.log);
// click
// TimeInterval {value: MouseEvent, interval: 1000 } // nghĩa là từ lúc subscribe đến lúc click lần đầu thì mất 1s
```

#### timeout()

`timeout<T>(due: number | Date, scheduler: SchedulerLike = async): MonoTypeOperatorFunction<T>`

`timeout()` nhận vào tham số giống như `delay()`, là 1 khoảng thời gian `Number` hoặc 1 ngày nào đó `Date`. `timeout()` sẽ throw error nếu như `Source Observable` không emit giá trị trong khoảng thời gian (nếu như tham số là `Number`) hoặc cho tới khi thời gian hiện tại bằng với ngày được truyền vào (nếu như tham số là `Date`).

![RxJS timeout](assets/rxjs-timeout.png)

```ts
interval(2000).pipe(timeout(1000)).subscribe(console.log, console.error);

// Error { name: "TimeoutError" }
```

#### timeoutWith()

`timeoutWith<T, R>(due: number | Date, withObservable: any, scheduler: SchedulerLike = async): OperatorFunction<T, T | R>`

`timeoutWith()` hoạt đột tương tự `timeout()` nhưng nhận thêm tham số thứ 2 là 1 `Observable`. Nếu như trường hợp `Source Observable` emit giá trị quá chậm so với `due` thì `timeoutWith()` thay vì throw error, `timeoutWith()` sẽ subscribe vào tham số `Observable` kia.

![RxJS timeoutWith](assets/rxjs-timeoutWith.png)

#### toPromise()

À ha, mình đặt cái này cuối cùng là có ý đồ 😅. Nhìn tên hàm các bạn cũng đoán được hàm này làm gì rồi phải không? Đây không phải là 1 operator nhưng được **RxJS** liệt kê vào **Utility Operator**. `toPromise()` là 1 instance method trên class `Observable` dùng để chuyển đổi 1 `Observable` thành `Promise`🤦‍. Tuy nhiên, `toPromise()` sẽ bị `deprecated` vào **RxJS v7** sắp tới, các bạn nào dùng thì cẩn thận nhé.

```ts
async function test() {
  const helloWorld = await of('hello')
    .pipe(map((val) => val + ' World'))
    .toPromise();
  console.log(helloWorld); // hello World
}
```

Trên đây là các **Utility Operator** mà **RxJS** cung cấp. Sử dụng nhiều nhất chắc chắn là `tap()` vì các bạn sẽ dùng `tap()` để debug Observable Flow rất nhiều 😂
