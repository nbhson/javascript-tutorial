import { combineLatest, concat, forkJoin, from, fromEvent, interval, merge, of, race, throwError, timer, zip } from "rxjs"
import { catchError, delay, endWith, map, mapTo, pairwise, startWith, switchMap, take, withLatestFrom } from "rxjs/operators"

const observer = {
    next: (data: any) => console.log(data),
    error: (error: any) => console.error(error),
    complete: () => console.log('Completed!')
}

/** forkJoin - tất cả phải completed */
// forkJoin([
//     Promise.reject('Error'),
//     of('Word').pipe(delay(2000)),
//     of('!!!').pipe(delay(3000)),
// ])
// .subscribe(observer)

/** combineLatest - không cần phải completed */
// combineLatest([
//     of('Word').pipe(delay(2000)),
//     interval(1000)
// ])
// .subscribe(observer)

const first  = timer(4000);
const second = timer(3000);
const third  = timer(2000);
const fourth = timer(1000);

let count = 0;

combineLatest(
  first.pipe(mapTo("FIRST!")).pipe(catchError(err => of(err))),
  throwError("This is an error!").pipe(catchError(err => of(err))),
  second.pipe(mapTo("SECOND!")).pipe(catchError(err => of(err))),
  third.pipe(mapTo("THIRD")).pipe(catchError(err => of(err))),
  fourth.pipe(mapTo("FOURTH")).pipe(catchError(err => of(err))),
)
// .pipe(
//   switchMap(data => {
//     count++;
//     const obs$ = count < 5 ? of("switchMap") : throwError("This is an error!");
//     return obs$.pipe(catchError(err => of(err)));
//   }),
//   catchError(err => of(err)),
// )
.subscribe((val: any) => console.log(val));

/** zip - gộp thành cập */
// zip(
//     of(1,2), // không đủ cặp, zip sẽ bỏ qua cặp cuối cùng
//     of(4,5,6),
//     of(7,8,9),
// )
// .subscribe(observer)

/** concat - theo thứ tự từng stream */
// concat(
//     interval(1000).pipe(take(3)), // thằng nào đặt trước chạy trước
//     Promise.reject('Error'),
//     interval(500).pipe(take(6)),
// )
// .subscribe(observer)

/** merge - thằng nào emit thì display ngay thằng đó */
// merge(
//     interval(1000).pipe(take(3)),
//     interval(500).pipe(take(6)),
//     // Promise.reject('Error'),
// )
// .subscribe(observer);

/** race - chỉ subscribe thằng chạy trước */
// race(
//     interval(1000).pipe(take(3)), // không bao giờ được emit
//     interval(500).pipe(take(6)) // luôn được emit
// )
// .subscribe(observer)

/** withLatestFrom */
// const withLatestFrom$ = interval(2000).pipe(map(x => `Value ${x}`));
// fromEvent(document, 'click')
//   .pipe(withLatestFrom(withLatestFrom$))
//   .subscribe(observer);

/** startWith */
// of('world').pipe(startWith('Hello')).subscribe(observer);

/** endWith */
// of('world').pipe(endWith('Hello')).subscribe(observer);

/** pairwise */
// from([1, 2, 3, 4, 5])
//   .pipe(
//     pairwise(),
//   )
//   .subscribe(observer);