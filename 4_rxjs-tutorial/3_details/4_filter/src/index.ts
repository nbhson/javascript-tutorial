import { from, fromEvent, interval, of, timer } from "rxjs"
import { auditTime, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, every, filter, find, first, last, pluck, sampleTime, single, skip, skipUntil, skipWhile, take, takeLast, takeUntil, takeWhile, throttleTime } from "rxjs/operators"

const observer = {
    next: (data: any) => console.log(data),
    error: (error: any) => console.error(error),
    complete: () => console.log('Completed!')
    
}

const arr = [1,2,3,4,5,6]

/** -------------------------------- GROUP 1  -------------------------------- */

/** --filter-- */
// from(arr)
// .pipe(
//     filter(x => x % 2 === 0)
// )
// .subscribe(observer)

/** --every-- */
// of(arr)
// .pipe(
//     every((x: number) => x > 3)
// )
// .subscribe(observer)

/** --find-- */
// from(arr)
// .pipe(
//     find(x => x > 3) // 4
// )
// .subscribe(observer)


/** -------------------------------- GROUP 2  -------------------------------- */

/** --fisrt-- */
// from(arr)
// .pipe(
//     // first() // 1
//     first(x => x > 1) // 2
// )
// .subscribe(observer)

/** --last-- */
// from(arr)
// .pipe(
//     // last() // 6
//     last(x => x > 3) // 6
// )
// .subscribe(observer)

/** --single-- */
// from(arr)
// .pipe(
//     // single() // lỗi
//     single(x => x > 3) // lỗi vì có nhìu giá trị lớn hơn 3
// )
// .subscribe(observer)


/** -------------------------------- GROUP 3  -------------------------------- */

/** --take-- */
// interval(1000)
// .pipe(
//     take(5)
// )
// .subscribe(observer)

/** takeLast */
// interval(1000)
// .pipe(
//     take(5), // 0 1 2 3 4
//     takeLast(2) // 3 4 (2 giá trị cuối cùng)
// )
// .subscribe(observer)

/** takeUntil */
// interval(1000)
// .pipe(
//     takeUntil(timer(5000)) // 0 1 2 3
// )
// .subscribe(observer)

/** takeWhile */
// interval(1000)
// .pipe(
//     takeWhile(x => x < 5) // 0 1 2 3 4
// )
// .subscribe(observer)

/** -------------------------------- GROUP 4  -------------------------------- */

/** skip */
// interval(1000)
// .pipe(
//     skip(3) // 3 4 5 ...
// )
// .subscribe(observer)

/** skipUntil */
// interval(1000)
// .pipe(
//     skipUntil(timer(5000)) // 4 5 6 7 ...
//     // skipUntil(fromEvent(document, 'click')) // 15 16 17 18 ...
// )
// .subscribe(observer)

/** skipWhile */
// interval(1000)
// .pipe(
//     skipWhile(x => x < 3) // 3 4 5 6 ...
// )
// .subscribe(observer)

/** -------------------------------- GROUP 5  -------------------------------- */

/** distinct */
// from([1,2,1,3,5,4,6,3,5,4,2])
// .pipe(
//     distinct() 
// )
// .subscribe(observer) // 1 2 3 5 4 6

/** distinctUntilChanged */
// from([1,1,2,1,3,5,4,6,3,5,4,2])
// .pipe(
//     distinctUntilChanged() 
// )
// .subscribe(observer)

/** distinctUntilKeyChanged */
of(
    { age: 4, name: 'Foo' },
    { age: 6, name: 'Foo' },
    { age: 7, name: 'Bar' },
    { age: 5, name: 'Foo' }
)
.pipe(distinctUntilKeyChanged('name'))
.subscribe(observer)
