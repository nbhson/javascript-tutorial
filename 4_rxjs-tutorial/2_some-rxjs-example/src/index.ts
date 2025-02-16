import { Observable, interval, fromEvent, merge, concat, BehaviorSubject, combineLatest, zip } from "rxjs";
import { combineAll, map, mergeAll, mergeMap, take } from 'rxjs/operators';

const observer = {
    next(res: any) {
        console.log(res);
    },
    error(error: any) {
        console.log(error);
    },
    complete() {
        console.log('Completed!');
    }
}

const observable$ = interval(1000).pipe(take(10));
const click$ = fromEvent(document, 'click').pipe(take(5));

/** -----------------------------merge, concat------------------------------------ */
// const subscription = observable$.subscribe(observer)
// const subscription = merge(observable$, click$, 2).subscribe(observer)
// const subscription = concat(observable$, click$).subscribe(observer)

/** -----------------------------combineLatest, zip------------------------------------ */
// const source = new BehaviorSubject([1, 2, 3])
// const m = source.pipe(
//     map(arr => arr.filter(x => x % 2 === 0))
// )
// const n = source.pipe(
//     map(arr => arr.filter(x => x % 2 != 0))
// )
// combineLatest(m, n).subscribe(observer) // [[2], [1,3]]
// zip(m, n).subscribe(observer)

// setTimeout(() => {
//     source.next([4, 5, 6])
// }, 3000);

/** -----------------------------mergeAll, mergeMap------------------------------------ */
// click$.subscribe(next => {
//     console.log('Clicked!');
//     observable$.subscribe(observer)
// })

// không cần phải subscribe 2 lần như higher order observable
// click$.pipe(
//     map((data) => {
//         console.log('Clicked!');
//         return observable$
//     }),
//     mergeAll()
// ).subscribe(observer)

// mergeMap như mergeAll, CÁCH VIẾT NGẮN HƠN CỦA MAP VÀ MERGEALL
// click$.pipe(
//     mergeMap((data) => {
//         console.log('Clicked!');
//         return observable$
//     })
// ).subscribe(observer)

// THÊM VÀO SỐ LƯỢNG CHẠY ĐỒNG THỜI
// click$.pipe(
//     mergeMap((data) => { // concatMap thay mergeMap ở đây
//         console.log('Clicked!');
//         return observable$
//     }, 2) // NẾU MÀ CHO VỀ 1 THÌ NÓ CHÍNH LÀ CONCATMAP
// ).subscribe(observer)