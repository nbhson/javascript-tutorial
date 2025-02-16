/** VÍ DỤ CỦA PROMISE */
Promise.timeout = function(miliseconds) {
  console.log('Đã kích hoạt timer');
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole('Successfully')
    }, miliseconds);
  })
}

const promiseObj = Promise.timeout(1000) // đã kích hoạt timer
promiseObj
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Fail');
  })
