import { of, from, fromEvent, fromEventPattern, interval, timer, throwError, defer } from 'rxjs'

const observer = {
    next: console.log,
    error: console.log,
    complete: () => console.log('Completed!'),
};

/** of */
// of('Hello').subscribe(observer) // Hello
// of(123).subscribe(observer) // 123
// of(true).subscribe(observer) // true
// of(['S', 6, 8]).subscribe(observer) // ['S', 6, 8]
// of(Promise.resolve('Successfully')).subscribe(observer) // Promise object

/** --from-- */
// const map = new Map();
// map.set(1, 'Sơn')
// map.set(2, 'Nguyễn')

// from(Promise.resolve('Successfully')).subscribe(observer) // Successfully
// from([1, 2, 3]).subscribe(observer) // 1 2 3
// from('Sơn Nguyễn').subscribe(observer) // S ơ n  N u y ễ n
// from(map).subscribe(observer) // [1, 'Sơn] [2, 'Nguyễn']

/** --fromEvent-- */
// const button = document.querySelector('#button');
// const input = document.querySelector('#input');
// let clickSubscription = fromEvent(button, 'click').subscribe(observer)
// let keyupSubscription = fromEvent(input, 'keyup').subscribe(observer)

// // chủ động unsubscribe để trách rò rỉ bộ nhớ
// setTimeout(() => {
//     clickSubscription.unsubscribe()
//     keyupSubscription.unsubscribe()
// }, 3000);


/** --fromEventPattern-- */
// fromEventPattern(
//     (addHandler: any) => {
//         button.addEventListener('click', addHandler)
//     },
//     (removeHandler: any) => {
//         button.removeEventListener('click', removeHandler)
//     }
// ).subscribe(observer)

/** interval */
// const intervalSubscription = interval(1000).subscribe(observer); // 0 1 2
// setTimeout(() => {
//     intervalSubscription.unsubscribe()
// }, 3000);

/** timer */
// timer(2000).subscribe(observer) // delay 2s và completed! (timeout)
// timer(5000, 1000).subscribe(observer) // delay 5s và sau mỗi giây in ra giá trị (interval)

/** throwError */
// throwError('ThrowError message').subscribe(observer) // ?

/** defer */
// const random = of(Math.random())
const random = defer(() => of(Math.random()))
random.subscribe(observer)
random.subscribe(observer)
random.subscribe(observer)