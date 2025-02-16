import { BehaviorSubject, combineLatest, forkJoin, from, fromEvent, interval, merge, of, race, throwError } from 'rxjs';
import { buffer, bufferTime, delay, filter, map, pluck, reduce, scan, toArray } from 'rxjs/operators';

const observer = {
    next: console.log,
    error: console.log,
    complete: () => console.log('Completed!'),
};

const users = [
    { id: 'e3653f2ae67', username: 'sonnguyen', firstname: 'Son', lastname: 'Nguyen', postCount: 15 },
    { id: '160bd7e3cc5', username: 'phuongtrinh', firstname: 'Phuong', lastname: 'Trinh', postCount: 20 },
];

/** map */

// // dùng of sẽ không emit từng phần tử
// of(users).pipe(
//     map(users => {
//         return users
//     })
// )
// .subscribe(observer)

// // dùng from mới emit từng phần tử
// from(users).pipe(
//     map(user => {
//         return user
//     })
// )
// .subscribe(observer)

merge(
    of(users[0]).pipe(delay(2000)), // sau 2s đầu tiên sẽ ra sonnguyen
    of(users[1]).pipe(delay(4000)) // 2s tiếp theo (4s) sẽ ra phuongtrinh
)
.pipe(
    map(user => ({ ...user, fullName: `${user.firstname} ${user.lastname}` }))
)
.subscribe(observer)

/** mapTo -> map (v9 or later) */
// const mapTo = document.querySelector('#mapTo')
// const mouseOver = fromEvent(mapTo, 'mouseover')
// const mouseLeave = fromEvent(mapTo, 'mouseleave')

// merge(
//     mouseOver.pipe(
//         map(() => true) // return true
//     ),
//     mouseLeave.pipe(
//         map(() => false) // return false
//     )
// ).subscribe(observer)

/** pluck */
// const param1$ = of({ id: 123 });
// const param2$ = of({ bar: { foo: 456 } });
// const param3$ = of([1,2,3]);
// param1$
//     .pipe(pluck('id'))
//     .subscribe(observer)

// param2$
//     .pipe(pluck('bar', 'foo'))
//     .subscribe(observer)

// param3$
//     .pipe(pluck('2'))
//     .subscribe(observer)

/** reduce */
// merge(
//     of(users[0]).pipe(delay(2000)),
//     of(users[1]).pipe(delay(4000)),
//     // interval(1000).pipe(map(() => 1)) // mở dòng này ra thì sẽ không bao giờ reduce được
// )
// .pipe(
//     reduce((accumulator: any, currentData: any) => accumulator + currentData.postCount, 0)
// )
// .subscribe(observer); // 35

/** toArray */
// merge(
//     of(users[0]),
//     of(users[1]),
// )
// .pipe(
//     // reduce((acc: any[], curr: any) => [...acc,curr], [])
//     toArray() // cách viêt ngắn gọn hơn arr
// )
// .subscribe(observer);

/** buffer - bufferTime */
// const interval$ = interval(1000);
// const fromEvent$ =  fromEvent(document, 'click')

// interval$
// .pipe(
//     // buffer(fromEvent$)
//     bufferTime(5000)
// )
// .subscribe(observer)

/** scan */
// merge(
//     of(users[0]),
//     of(users[1]),
// )
// .pipe(
//     scan(
//         (accumulator: any, currentData: any) =>
//         accumulator + currentData.postCount, 0
//     )
// )
// .subscribe(observer);

/** Quản lí state bằng scan */
// let initObject = {}
// let stateSubject = new BehaviorSubject(initObject)
// let state$ = stateSubject
// .asObservable()
// .pipe(
//     scan((acc, curr) => ({...acc, ...curr}), {})
// )
// .subscribe(observer)

// stateSubject.next({name: 'Sơn'})
// stateSubject.next({name: 'Sơn', age: 24})
