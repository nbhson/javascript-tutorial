function Observable(_subscribe) {
  this._subscribe = _subscribe
}

function Subscription(unsubcribe) {
  this.unsubcribe = unsubcribe
}

// Method của một đối tượng cụ thể thì cần phải .prototype
Observable.prototype.subscribe = function(observerNext, error = () => {}, completed = () => {}) {
  let observer
  if (typeof observerNext === 'function') {
    observer = {
      next: observerNext,
      error: error || (() => {}),
      completed: completed || (() => {})
    }
  } else {
    observer = observerNext
  }
  return this._subscribe(observer)
}

Observable.timeout = function(miliseconds) {
  function _subscribe(observer) {
    const timeoutId = setTimeout(() => {
      observer.next("Sucessfully")
      observer.completed()
    }, miliseconds);

    // for unsubcribe
    return new Subscription(() => {
      clearTimeout(timeoutId)
    })
  }
  return new Observable(_subscribe) // for subscribe
}

Observable.interval = function(miliseconds) {
  function _subscribe(observer) {
    const intervalId = setInterval(() => {
      observer.next("Sucessfully")
    }, miliseconds);

    // for unsubcribe
    return new Subscription(() => {
      clearInterval(intervalId) // một observable bị unsubscribe không có nghĩa là nó completed
    })
  }
  return new Observable(_subscribe) // for subscribe
}