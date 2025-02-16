import { from, fromEvent, interval, merge, of, timer,  } from "rxjs"
import { concatAll, concatMap, delay, map, mergeAll, mergeMap, mergeMapTo, switchAll, switchMap, take, tap, timeout } from "rxjs/operators"

const observer = {
    next: (data: any) => console.log(data),
    error: (error: any) => console.error(error),
    complete: () => console.log('Completed!')
}

/** Concept - HOO */
interval(1000)
.pipe(
    map((data) => of(`I'm an observable ${data}`))
)
.subscribe({
    next: (observable) => {
        // console.log(observable) // Observable Object
        // observable.subscribe(console.log) // Value I'm an observable 1 2 3 ...
    }
})

/** mergeAll/switchAll/concatAll  */

// fromEvent(document, 'click')
// .pipe(
//     map((data) => interval(1000).pipe(take(3))),
//     mergeAll(2)
// )
// .subscribe(observer)

// fromEvent(document, 'click')
// .pipe(
//     map((data) => interval(1000).pipe(take(3))),
//     concatAll()
// )
// .subscribe(observer)

// fromEvent(document, 'click')
// .pipe(
//     map((data) => interval(1000).pipe(take(3))),
//     switchAll()
// )
// .subscribe(observer)

/** mergeMap */
// fromEvent(document, 'click')
// .pipe(
//     mergeMap(() => interval(1000).pipe(take(5)))
// )
// .subscribe(observer)

/** concatMap */
// fromEvent(document, 'click')
// .pipe(
//     concatMap(() => interval(1000).pipe(take(5)))
// )
// .subscribe(observer)

/** switchMap */
// fromEvent(document, 'click')
// .pipe(
//     switchMap(() => interval(1000).pipe(take(5)))
// )
// .subscribe(observer)

// timer(0, 1000)
// .pipe(
//     mergeMapTo(of('Success!'))
// )
// .subscribe(observer)