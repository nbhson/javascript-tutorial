import { AsyncSubject, BehaviorSubject, ConnectableObservable, interval, ReplaySubject, Subject } from "rxjs"
import { multicast, take } from "rxjs/operators"

/** Trường hợp - 2 execution khác nhau */
// const _observable = interval(500).pipe(take(5));

// const _observerA = {
//   next: (val: any) => console.log(`Observer A: ${val}`),
//   error: (err: any) => console.log(`Observer A Error: ${err}`),
//   complete: () => console.log(`Observer A complete`),
// };

// _observable.subscribe(_observerA);

// const _observerB = {
//   next: (val: any) => console.log(`Observer B: ${val}`),
//   error: (err: any) => console.log(`Observer B Error: ${err}`),
//   complete: () => console.log(`Observer B complete`),
// };

// setTimeout(() => {
//   _observable.subscribe(_observerB);
// }, 2000);

/** Concept - share execution cho các observer - Dùng pattern */
// const observable = interval(500).pipe(
//     take(6)
// );

// const observerA = {
//     next: (val: any) => console.log(`Observer A: ${val}`),
//     error: (err: any) => console.log(`Observer A Error: ${err}`),
//     complete: () => console.log(`Observer A complete`),
// };
  
// const observerB = {
//     next: (val: any) => console.log(`Observer B: ${val}`),
//     error: (err: any) => console.log(`Observer B Error: ${err}`),
//     complete: () => console.log(`Observer B complete`),
// };

// const hybridObserver = {
//     observers: [] as any[],
//     registerObserver(observer: any) {
//         this.observers.push(observer);
//     },
//     next(value: any) {
//         this.observers.forEach((observer: any) => observer.next(value));
//     },
//     error(err: any) {
//         this.observers.forEach((observer: any) => observer.error(err));
//     },
//     complete() {
//         this.observers.forEach((observer: any) => observer.complete());
//     }
// }

// hybridObserver.registerObserver(observerA);
// observable.subscribe(hybridObserver);

// setTimeout(() => {
//     hybridObserver.registerObserver(observerB);
// }, 2000);

// Lúc này bạn sẽ thấy rằng hybridObserver khá là giống một Observable, lại cũng có những phần của một Observer.
// Nó chính là Subject trong observable
// const subject = new Subject();

// subject.subscribe(observerA);
// observable.subscribe(subject);

// setTimeout(() => {
//   subject.subscribe(observerB);
// }, 2000);

/** Subject */
// let subject = new Subject()
// let subjectSubscription = subject.asObservable()

// subjectSubscription.subscribe({
//     next: (data) => {
//         console.log('observableA: ' + data); // 1 2 3
//     },
// })

// subject.next('1');
// subject.next('2');
// // subject.complete(); // đã complete nên thằng tiếp theo ko thấy

// subject.subscribe({
//     next: (data) => {
//         console.log('observableB: ' + data); // chỉ nhận được 3
//     },
// })

// subject.next('3');

/** BehaviorSubject */
// const bSubject = new BehaviorSubject(null);

// bSubject.subscribe({
//   next: (v) => console.log('observerA: ' + v)
// });

// bSubject.next('Hello');
// bSubject.next('World');
// bSubject.next('New');

// bSubject.subscribe({
//   next: (v) => console.log('observerB: ' + v)
// });

// bSubject.next('World 2');
// bSubject.next('World 3');

// console.log(bSubject.value);


/** ReplaySubject */
// const subject = new ReplaySubject(3); // buffer 3 values for new subscribers

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v),
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v),
// });

// subject.next(5);


/** AsyncSubject */
// const subject = new AsyncSubject();

// subject.subscribe({
//   next: (v) => console.log('observerA: ' + v),
// });

// subject.next(1);
// subject.next(2);
// subject.next(3);
// subject.next(4);

// subject.subscribe({
//   next: (v) => console.log('observerB: ' + v),
// });

// subject.next(5);
// subject.complete(); // phải complete mới hoạt động


/** Multicast */
const subject = new Subject();

const connectableObservable = interval(500).pipe(
  take(5),
  multicast(subject)
) as ConnectableObservable<number>;

const observerA = {
  next: (val: any) => console.log(`Observer A: ${val}`),
  error: (err: any) => console.log(`Observer A Error: ${err}`),
  complete: () => console.log(`Observer A complete`),
};

const observerB = {
  next: (val: any) => console.log(`Observer B: ${val}`),
  error: (err: any) => console.log(`Observer B Error: ${err}`),
  complete: () => console.log(`Observer B complete`),
};

connectableObservable.subscribe(observerA);
connectableObservable.connect();

setTimeout(() => {
  connectableObservable.subscribe(observerB);
}, 2000);