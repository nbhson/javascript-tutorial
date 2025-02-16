# RxJS Creation Operators

> - Là những function để tạo ra các observable

## Common Creation Operators

#### `of()`

`of()` là operator dùng để tạo 1 `Observable` từ bất cứ giá trị gì: primitives, Array, Object, Function v.v... 

#### `from()`

`from()` cũng gần giống với `of()`, cũng được sử dụng để tạo `Observable` từ 1 giá trị. 
Tuy nhiên, điểm khác biệt đối với `of()` là `from()` chỉ nhận vào giá trị là một `Iterable` hoặc là một `Promise`.

> Iterable là những giá trị có thể iterate (lập) qua được, ví dụ: array, map, set, hoặc string.

#### `fromEvent()`

`fromEvent()` được dùng để chuyển đổi 1 sự kiện (Event) sang `Observable`.

Các bạn chú ý là `fromEvent()` sẽ tạo 1 `Observable` không tự `complete`. Việc này hoàn toàn hợp lý vì chúng ta muốn lắng nghe các sự kiện như `click` và `keydown` cho đến khi nào chính chúng ta không cần lắng nghe nữa thì thôi. 

`fromEvent()` không thể quyết định được lúc nào chúng ta không cần những sự kiện này nữa. Điều này cũng đồng nghĩa với việc các bạn phải chủ động `unsubscribe` các `Observable` tạo từ `fromEvent()` này nếu không muốn bị **tràn bộ nhớ** (memory leak).

#### `fromEventPattern()`

`fromEventPattern()` là 1 dạng _nâng cao_ của `fromEvent()`. Nói về concept thì `fromEventPattern()` cũng giống với `fromEvent()` là tạo `Observable` từ sự kiện. Tuy nhiên, `fromEventPattern()` rất khác với `fromEvent()` về cách dùng, cũng như loại sự kiện để xử lý. 

- Cho phép xử lí những event phức tạp hơn mà `fromEvent()` không làm được (có thể cho phép sử dụng những event root/mặc định, xử lí nhiều event đồng thời, xử lí thêm những logic khác...)
 
#### `interval()`

`interval()` là hàm để tạo `Observable` mà sẽ emit giá trị số nguyên từ số 0 theo 1 chu kỳ nhất định. Hàm này giống với `setInterval`.

Giống như `fromEvent()`, `interval()` không tự động `complete` cho nên các bạn phải xử lý việc `unsubscribe`.

#### `timer()`

`timer()` có 2 cách sử dụng:

- 1 tham số (tương tự như setTimeout): Tạo `Observable` mà sẽ emit giá trị sau khi delay 1 khoảng thời gian nhất định. Cách dùng này sẽ tự `complete` nhé.
- 2 tham số (tương tự như interval): Tạo `Observable` mà sẽ emit giá trị sau khi delay 1 khoảng thời gian và sẽ emit giá trị sau mỗi chu kỳ sau đó. Cách dùng này tương tự với `interval()` nhưng `timer()` hỗ trợ delay trước khi emit. Vì cách dùng này giống với `interval()` nên sẽ không tự `complete`.

#### `throwError()`

`throwError()` sẽ dùng để tạo `Observable` mà thay vì emit giá trị, `Observable` này sẽ throw 1 error ngay lập tức sau khi `subscribe`.

`throwError()` thường dùng trong việc xử lý lỗi của 1 `Observable`, sau khi xử lý lỗi, chúng ta muốn throw tiếp error cho `ErrorHandler` tiếp theo, chúng ta sẽ dùng `throwError`. 

Khi làm việc với `Observable`, có 1 số `operators` yêu cầu các bạn phải cung cấp 1 `Observable` (ví dụ như `switchMap`, `catchError`) thì việc `throwError` trả về 1 `Observable` là rất thích hợp.

```ts
apiCall.pipe(
    catchError(err => {
        const exception = service.logError(err); // xử lí lỗi
        return throwError(exception);
    })
)
```

#### `defer()`

- Mỗi lần **`subscribe defer sẽ tạo ra 1 observable mới`** 

- `defer()` nhận vào 1 `ObservableFactory` và sẽ trả về `Observable` này. Điểm đặc biệt của `defer()` là ở việc `defer()` sẽ dùng `ObservableFactory` này để tạo 1 `Observable` mới cho mỗi `Subscriber`.

- Khi có defer(), nó là lazy load, khi nào subscribe thì mới chạy function of(), mà mỗi lần of() chạy sẽ sinh ra một giá trị mới

- CHỨC NĂNG NHƯ RETRY(), KHI MUỐN CALL LẠI MỘT API NÀO ĐÓ. VÌ KHI SUBSCRIBE, OBSERVABLE TRONG DEFER SẼ ĐƯỢC GỌI LẠI

```ts
const random = defer(() => of(Math.random()))
random.subscribe(observer)
random.subscribe(observer)
random.subscribe(observer)
```

> Với `defer()`, chúng ta đã có 3 giá trị khác nhau cho mỗi lần subscribe. Điều này giúp ích ở điểm nào? Ví dụ trường hợp chúng ta cần `retry` 1 `Observable` nào đó mà cần so sánh với 1 giá trị random để quyết định xem có chạy tiếp hay không, thì `defer()` (kết hợp với `retry`) là 1 giải pháp cực kỳ hiệu quả.
