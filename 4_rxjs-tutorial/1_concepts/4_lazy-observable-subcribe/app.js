/** CÁCH ĐĂNG KÍ ĐỂ NHẬN DỮ LIỆU */

function Observable(fnWaitToRun) {
  this.subscribe = fnWaitToRun
}

Observable.timeout = function(miliseconds) {
  function timeoutWaitToRun(next) {
    setTimeout(() => {
      next()
    }, miliseconds);
  }
  return new Observable(timeoutWaitToRun)
}

Observable.interval = function(miliseconds) {
  function intervalWaitToRun(next) {
    setInterval(() => {
      next()
    }, miliseconds);
  }
  return new Observable(intervalWaitToRun)
}

// const obsTimeout$ = Observable.timeout(1000) // Chưa kích hoạt timer
// obsTimeout$.subscribe(next) // đã kích hoạt timer

const obsInterval$ = Observable.interval(1000) // Chưa kích hoạt timer
obsInterval$.subscribe(next) // đã kích hoạt timer

function next() {
  console.log('Successfully');
}
