# RxJS Filtering Operators

### filter()

`filter<T>(predicate: (value: T, index: number) => boolean, thisArg?: any): MonoTypeOperatorFunction<T>`

Như `signature` trên thì `filter()` sẽ nhận vào 1 `predicate` là 1 `function` mà `function` này phải trả về giá trị `truthy` hoặc `falsy`. Nếu như `truthy` thì `filter()` sẽ emit giá trị của `Observable` tại thời điểm đó. Ngược lại nếu như `falsy`, thì `filter()` sẽ không emit giá trị đó. Cách hoạt động giống như `Array.prototype.filter()` vậy.

![RxJS filter](assets/rxjs-filter.png)

```typescript
from([1, 2, 3, 4, 5, 6])
  .pipe(
    filter((x) => x % 2 === 0) // số chẵn
  )
  .subscribe(console.log); // output: 2, 4, 6
```

### find()

`find<T>(predicate: (value: T, index: number, source: Observable<T>) => boolean, thisArg?: any): OperatorFunction<T, T | undefined>`

Lại là một `operator` có `signature` khác quen thuộc. Giống như `Array.prototype.find()`, `find()` sẽ emit giá trị đầu tiên mà thoả mãn được điều kiện từ `predicate` rồi `complete`. Khác với `first()`, `find()` **phải** có `predicate` và `find()` sẽ không emit `Error` nếu như không có giá trị nào thoả mãn điều kiện.

![RxJS find](assets/rxjs-find.png)

```typescript
from([1, 2, 3, 4, 5, 6])
  .pipe(
    find((x) => x % 2 === 0) // số chẵn
  )
  .subscribe(console.log, null, () => console.log('complete')); // output: 2 -> complete
```

### first()

`first<T, D>(predicate?: (value: T, index: number, source: Observable<T>) => boolean, defaultValue?: D): OperatorFunction<T, T | D>`

Giống như cái tên, `first()` sẽ emit giá trị đầu tiên của 1 `Observable` rồi `complete`. `first()` sẽ throw `EmptyError` nếu như `Observable` tự `complete` trước khi emit 1 giá trị nào (ví dụ như `EMPTY` chẳng hạn, là 1 `Observable` rỗng. Hoặc `of()` mà không nhận vào giá trị nào).

![RxJS first](assets/rxjs-first.png)

```typescript
from([1, 2, 3, 4, 5, 6])
  .pipe(first())
  .subscribe(console.log, null, () => console.log('complete')); // output: 1 -> complete

of() // an empty Observable
  .pipe(first())
  .subscribe(null, console.log, null); // Error: EmptyError
```

Ngoài ra, `first()` còn có thể nhận vào 2 tham số optional: `predicate` và `defaultValue`. Nếu như bạn truyền vào `predicate` thì `first()` sẽ throw `Error` nếu như `Observable` đã `complete` mà chưa có giá trị nào thoả được điều kiện của `predicate`. Nếu như bạn truyền vào `predicate` và không muốn có `Error` thì hãy truyền thêm vào `defaultValue`.

> Nếu bạn nào từng làm qua **.NET LINQ** thì `first(predicate, defaultValue)` hoạt động tương tự `FirstOrDefault`

```typescript
from([1, 2, 3, 4, 5, 6])
  .pipe(first((x) => x > 3))
  .subscribe(console.log, null, () => console.log('complete')); // output: 4 -> complete

from([1, 2, 3, 4, 5, 6])
  .pipe(first((x) => x > 6)) // without default value
  .subscribe(null, console.log, null); // Error: Error

from([1, 2, 3, 4, 5, 6])
  .pipe(
    first((x) => x > 6),
    'defaultValue'
  ) // with default value
  .subscribe(console.log, null, () => console.log('complete')); // output: 'defaultValue' -> complete
```

### last()

`last<T, D>(predicate?: (value: T, index: number, source: Observable<T>) => boolean, defaultValue?: D): OperatorFunction<T, T | D>`

Hoàn toàn ngược lại với `first()`, `last()` sẽ emit giá trị cuối cùng của `Observable` trước khi `Observable` này `complete`. Tất các behaviors mà `first()` có thì `last()` cũng có. Nghĩa là:

- Throw `EmptyError` nếu như `Observable` tự `complete` trước khi emit bất kỳ 1 giá trị nào.
- Cũng nhận vào 2 tham số optional: `predicate` và `defaultValue`.
- Throw `Error` nếu như **chỉ** có `predicate` và không có giá trị nào thoả điều kiện.
- Emit `defaultValue` nếu như có `predicate` và `defaultValue` và không có giá trị nào thoả điều kiện.

![RxJS last](assets/rxjs-last.png)

```typescript
from([1, 2, 3, 4, 5, 6])
  .pipe(last())
  .subscribe(console.log, null, () => console.log('complete')); // output: 6 -> complete

of() // an empty Observable
  .pipe(last())
  .subscribe(null, console.log, null); // Error: EmptyError
```

### single()

`single<T>(predicate?: (value: T, index: number, source: Observable<T>) => boolean): MonoTypeOperatorFunction<T>`

Hoạt động tương tự như `first()` nhưng nghiêm ngặt hơn `first()` ở điểm `single()` sẽ throw `Error` nếu như có **NHIỀU HƠN 1** giá trị thoả điều kiện. `single()` không nhận vào `defautlValue` và sẽ emit `undefined` nếu như không có giá trị nào thoả điều kiện khi truyền vào tham số `predicate`. Phần lớn `single()` chỉ nên sử dụng khi bạn có điều kiện `predicate` cần phải thoả mãn. Nếu dùng `single()` lên 1 `Observable` emit nhiều hơn 1 giá trị, `single()` sẽ throw `Error`.

![RxJS single](assets/rxjs-single.png)

```typescript
from([1, 2, 3]).pipe(single()).subscribe(null, console.log, null); // error: Error -> nhiều hơn 1 giá trị được emit từ from() và single() không có điều kiện gì.

from([1, 2, 3])
  .pipe(single((x) => x === 2))
  .subscribe(console.log, null, () => console.log('complete')); // output: 2 -> complete

from([1, 2, 3])
  .pipe(single((x) => x > 1))
  .subscribe(null, console.log, null); // error: Error -> có nhiều hơn 1 giá trị > 1.
```

### take()

`take<T>(count: number): MonoTypeOperatorFunction<T>`

`take()` nhận vào 1 tham số `count` để dùng cho số lần lấy giá trị được emit từ `Observable` sau đó sẽ `complete`.

![RxJS take](assets/rxjs-take.png)

```typescript
from([1, 2, 3, 4])
  .pipe(take(2))
  .subscribe(console.log, null, () => console.log('complete')); // output: 1, 2 -> complete
```

#### Special case: `take(1)`

Như các bạn cũng đã nhận ra là không có gì ngăn cản chúng ta truyền vào số `1` cho `take()` để có `take(1)`. Thoạt nhìn thì đây có vẻ là 1 cách khác của `first()`. Tuy nhiên, `take(1)` khác `first()` ở chỗ `take(1)` sẽ không throw bất cứ `error` nào nếu như `Observable` tự `complete` mà không emit giá trị nào.

`take(1)` nên dùng khi các bạn cần:

- Báo cáo user click ở đâu khi vào page đầu tiên?
- Snapshot của data tại 1 thời điểm
- Route Guard mà return `Observable`.

### takeLast()

`takeLast<T>(count: number): MonoTypeOperatorFunction<T>`

`takeLast()` hoạt động giống như `take()` nhưng ngược lại với `take()` là `takeLast()` sẽ lấy `n` giá trị cuối cùng được emit từ `Observable`. Các bạn chú ý là `takeLast()` chỉ emit khi nào `Observable` gốc `complete`, nếu như `Observable` gốc là 1 _long-live_ `Observable` (ví dụ: `interval()`) thì `takeLast()` sẽ không bao giờ emit.

![RxJS takeLast](assets/rxjs-takeLast.png)

```typescript
from([1, 2, 3, 4])
  .pipe(takeLast(2))
  .subscribe(console.log, null, () => console.log('complete')); // output: 3, 4 -> complete
```

### takeUntil()

`takeUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>`

`takeUntil()` nhận vào 1 tham số là 1 `Observable` như là 1 `notifier` (người báo hiệu) và `takeUntil()` sẽ emit giá trị của `Observable` gốc **CHO TỚI KHI** `notifier` emit.

- Có nghĩa là overvable bên trong (inner) takeUntil completed thì overvable bên ngoài (outer) mới completed

![RxJS takeUntil](assets/rxjs-takeUntil.png)

```typescript
interval(1000)
  .pipe(takeUntil(fromEvent(document, 'click')))
  .subscribe(console.log, null, () => console.log('complete')); // output: 0, 1, 2, 3, 4 -- click --> 'complete'
```

#### Use-case trong Angular:

`takeUntil()` được dùng để **unsubscribe** `Observable` trong `ngOnDestroy()` là rất phổ biến. Các bạn suy nghĩ mình có 1 `destroySubject: Subject<void>` tượng trưng cho `notifier`. Khi `ngOnDestroy()` thực thi, chúng ta sẽ cho `destroySubject.next()` (emit) và sử dụng `takeUntil(this.destroySubject)` thì `Observable` trong `Component` sẽ được **unsubscribe** khi `ngOnDestroy()` thực thi -> khi `Component` unmount.

### takeWhile()

`takeWhile<T>(predicate: (value: T, index: number) => boolean, inclusive: boolean = false): MonoTypeOperatorFunction<T>`

`takeWhile()` hoạt động tương tự `takeUntil()` nhưng thay vì nhận vào 1 `notifier` thì `takeWhile()` nhận vào 1 `predicate`. Nhiều người sẽ sử dụng `takeWhile()` và `takeUntil()` thay đổi qua lại nhưng `takeWhile()` hoạt động rất khác với `takeUntil()`. Các bạn xem qua 2 bài post trên group về vấn đề này nhé: [post 1](https://www.facebook.com/groups/AngularVietnam/permalink/816969675468552/) và [post 2](https://www.facebook.com/groups/AngularVietnam/permalink/845798295919023/)

- Có nghĩa là còn đúng điều kiện thì còn chạy, chỉ completed khi điều kiện không đúng nữa

![RxJS takeWhile](assets/rxjs-takeWhile.png)

```typescript
interval(1000)
  .pipe(takeWhile((x) => x < 6))
  .subscribe(console.log, null, () => console.log('complete')); // output: 0, 1, 2, 3, 4, 5 --> complete
```

`takeWhile()` hoạt động hiệu quả nhất khi bạn muốn `unsusbcribe` từ chính giá trị mà `Observable` emit (internal). Giống như ví dụ trên, mình lấy chính giá trị của `interval` để kiểm tra điều kiện. `takeUntil()` hoạt động hiệu quả khi bạn có `notifier` từ bên ngoài (external).

### skip()

`skip<T>(count: number): MonoTypeOperatorFunction<T>`

`skip()` hoạt động tương tự như `take()` nhưng mang tính chất ngược lại so với `take()`. Như `take()` là mình sẽ emit `n` giá trị ban đầu, còn `skip()` là mình sẽ **bỏ qua** `n` giá trị ban đầu.

![RxJS skip](assets/rxjs-skip.png)

```typescript
from([1, 2, 3, 4])
  .pipe(skip(1))
  .subscribe(console.log, null, () => console.log('complete')); // output: 2, 3, 4 --> complete
```

### skipUntil()

`skipUntil<T>(notifier: Observable<any>): MonoTypeOperatorFunction<T>`

`skipUntil()` hoạt động tương tự `takeUntil()` và mang tính chất giống với `skip()`.

![RxJS skipUntil](assets/rxjs-skipUntil.png)

```typescript
interval(1000)
  .pipe(skipUntil(fromEvent(document, 'click')))
  .subscribe(console.log); // output: click at 5 seconds -> 5, 6, 7, 8, 9....
```

### skipWhile()

`skipWhile<T>(predicate: (value: T, index: number) => boolean): MonoTypeOperatorFunction<T>`

`skipWhile()` hoạt động tương tự `takeWhile()` và mang tính chất giống với `skip()`

![RxJS skipWhile](assets/rxjs-skipWhile.png)

```typescript
interval(1000)
  .pipe(skipWhile((x) => x < 5))
  .subscribe(console.log); // output: 6, 7, 8, 9....
```

### distinct()

`distinct<T, K>(keySelector?: (value: T) => K, flushes?: Observable<any>): MonoTypeOperatorFunction<T>`

`distinct()` sẽ so sánh các giá trị được emit từ `Observable` và chỉ emit các giá trị chưa được emit qua.

```typescript
from([1, 2, 3, 4, 5, 5, 4, 3, 6, 1])
  .pipe(distinct())
  .subscribe(console.log, null, () => console.log('complete')); // output: 1, 2, 3, 4, 5, 6 -> complete
```

`distinct()` có thể nhận vào 1 tham số là hàm `keySelector` để có thể chọn được property nào cần được so sánh nếu như `Observable` emit giá trị là 1 complex `Object`

```typescript
of({ age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' })
  .pipe(distinct((p) => p.name))
  .subscribe(console.log, null, () => console.log('complete')); // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' } -> complete
```

### distinctUntilChanged()

`distinctUntilChanged<T, K>(compare?: (x: K, y: K) => boolean, keySelector?: (x: T) => K): MonoTypeOperatorFunction<T>`

`distinctUntilChanged()` có concept tương tự `distinct()` nhưng khác ở chỗ `distinctUntilChanged()` chỉ so sánh giá trị **sắp** được emit với giá trị **vừa** được emit (giá trị cuối) chứ không so sánh với tất cả giá trị **đã** được emit.

```typescript
from([1, 1, 2, 2, 2, 1, 1, 2, 3, 3, 4])
  .pipe(distinctUntilChanged())
  .subscribe(console.log, null, () => console.log('complete')); // output: 1, 2, 1, 2, 3, 4 -> complete
```

`distinctUntilChanged()` cũng có thể nhận vào 2 tham số optional: `compare` function và `keySelector` function. Tham số `keySelector` hoạt động giống như tham số `keySelector` của `distinct()`. Khi `compare` function không được truyền vào cho `distinctUntilChanged()` thì `distinctUntilChanged()` sẽ dùng `===` để so sánh 2 giá trị. Để thay đổi behavior này, các bạn truyền vào `compare` function, nếu `compare` function trả về `truthy` thì `distinctUntilChanged` sẽ **bỏ qua** giá trị đó.

```typescript
of(
  { age: 4, name: 'Foo' },
  { age: 6, name: 'Foo' },
  { age: 7, name: 'Bar' },
  { age: 5, name: 'Foo' }
)
  .pipe(distinctUntilChanged((a, b) => a.name === b.name))
  .subscribe(console.log, null, () => console.log('complete')); // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' } -> complete
```

### distinctUntilKeyChanged()

`distinctUntilKeyChanged<T, K extends keyof T>(key: K, compare?: (x: T[K], y: T[K]) => boolean): MonoTypeOperatorFunction<T>`

`distinctUntilKeyChanged()` là short-cut của `distinctUntilChanged()` + `keySelector`.

```typescript
of(
  { age: 4, name: 'Foo' },
  { age: 6, name: 'Foo' },
  { age: 7, name: 'Bar' },
  { age: 5, name: 'Foo' }
)
  .pipe(distinctUntilKeyChanged('name')
  .subscribe(console.log, null, () => console.log('complete')); // output: { age: 4, name: 'Foo' }, { age: 7, name: 'Bar' }, { age: 5, name: 'Foo' } -> complete
```
