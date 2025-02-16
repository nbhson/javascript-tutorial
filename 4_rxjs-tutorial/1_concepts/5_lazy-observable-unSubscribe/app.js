const interval$ = Observable.interval(1000)

// Ban than subscribe se tra ve cho chung ta mot object la subscription
const subscription = interval$.subscribe((data) => {
  console.log(data);
}) 

setTimeout(() => {
  subscription.unsubcribe()
}, 3000);
