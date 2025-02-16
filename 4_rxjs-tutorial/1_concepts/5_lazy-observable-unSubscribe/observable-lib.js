/** CÁCH HỦY ĐĂNG KÍ */

function Observable(fnWaitToRun) {
  this.subscribe = fnWaitToRun
}

function Subscription(unsubcribe) {
  this.unsubcribe = unsubcribe
}

Observable.timeout = function(miliseconds) {
  function timeoutWaitToRun(next) {
    const timeoutId = setTimeout(() => {
      next("Sucessfully")
    }, miliseconds);

    // for unsubcribe
    return new Subscription(() => {
      clearTimeout(timeoutId)
    })
  }
  return new Observable(timeoutWaitToRun) // for subscribe
}

Observable.interval = function(miliseconds) {
  function intervalWaitToRun(next) {
    const intervalId = setInterval(() => {
      next("Sucessfully")
    }, miliseconds);

    // for unsubcribe
    return new Subscription(() => {
      clearInterval(intervalId)
    })
  }
  return new Observable(intervalWaitToRun) // for subscribe
}