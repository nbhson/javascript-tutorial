/** CÁCH HỦY ĐĂNG KÍ */

function Observable(fnWaitToRun) {
  this.subscribe = fnWaitToRun
}

function Subscription(unsubcribe) {
  this.unsubcribe = unsubcribe
}

Observable.timeout = function(miliseconds) {
  function timeoutWaitToRun(observer) {
    const timeoutId = setTimeout(() => {
      observer.next("Sucessfully")
      observer.completed()
    }, miliseconds);

    // for unsubcribe
    return new Subscription(() => {
      clearTimeout(timeoutId)
    })
  }
  return new Observable(timeoutWaitToRun) // for subscribe
}

Observable.interval = function(miliseconds) {
  function intervalWaitToRun(observer) {
    const intervalId = setInterval(() => {
      observer.next("Sucessfully")
    }, miliseconds);

    // for unsubcribe
    return new Subscription(() => {
      clearInterval(intervalId) // một observable bị unsubscribe không có nghĩa là nó completed
    })
  }
  return new Observable(intervalWaitToRun) // for subscribe
}