import { from, fromEvent, interval, of, timer } from "rxjs"
import { auditTime, debounceTime, distinct, distinctUntilChanged, distinctUntilKeyChanged, filter, find, first, last, pluck, sampleTime, single, skip, skipUntil, skipWhile, take, takeLast, takeUntil, takeWhile, throttleTime } from "rxjs/operators"

const observer = {
    next: (data: any) => console.log(data),
    error: (error: any) => console.error(error),
    complete: () => console.log('Completed!')
}

const arr = [1, 2, 3, 4, 5, 6]

/** auditTime */
// interval(1000)
// .pipe(
//     auditTime(1500) // bên trong có timer(1500) / interval & auditTime
// )
// .subscribe(observer); 

// 1s: 0 -> timer(1500) runs
// 2s: 1 -> timer còn 500
// 2.5s: emit 1 => timer disable
// 3s: 2 -> timer(1500) runs
// 4s: 3 -> timer còn 500
// 4.5s: emit 3 => timer disable

fromEvent(document, 'click')
.pipe(
    auditTime(1500)
)
.subscribe(observer);

/** sampleTime */
// interval(1000)
// .pipe(
//     sampleTime(1500) // bên trong có timer(1500)
// )
// .subscribe(observer); 

// timer(1500) runs
// 1s: 0 -> timer còn 500ms
// 1.5s: emit 0 -> timer diasble -> timer(1500) runs
// 2s: 1 -> timer còn 1000ms
// 3s: 2 -> emit 1 -> timer disable -> timer(1500) runs
// 4s: 3 -> timer còn 500
// 4.5s: 3 -> emit 3 => timer disable -> timer(1500) runs
// 5s: 4 -> timer còn 1000ms
// 6s: 5 -> emit 4 -> timer disable -> timer(1500) runs


/** throttleTime */
// fromEvent(document, 'click')
// .pipe(
//     // sau 5s mới click được lần tiếp theo
//     // lấy giá trị đầu tiên
//     // khác với thằng auditTime là lấy giá trị cuối cùng của 5s 
//     throttleTime(5000) 
// )
// .subscribe(observer)


/** debounceTime */
const textInput = document.querySelector('#text')
fromEvent(textInput, 'keydown')
    .pipe(
        // gõ tới sáng mai luôn
        // tới khi ngừng gõ thì sau đó 1.5s mới emit giá trị cuối cùng đi
        debounceTime(1500),
        pluck('srcElement', 'value'),
    )
    .subscribe(observer)

// api: 'https://api.github.com/search/repositories?q='