/**
 * Promise được tạo ra chỉ để chạy 1 lần (chỉ được resole 1 lần)
 * Để xử lí cho callback hell
 * Nên gọi nhiều lần thì nó chỉ chạy 1 lần
 * 
 * => Observable được sinh ra để giải quyết các tác vụ về bất đồng bộ
 *    mà nó trả về nhiều giá trị, bị ngắt quãng trong tương lai
 */

function timeout(miliseconds) {
  return new Promise((resole, reject) => {
    setTimeout(() => {
      resole('Successfully')
      resole('Successfully') // không resole được từ lần thứ 2
      resole('Successfully')
      resole('Successfully')
    }, miliseconds);
  })
}

function interval(miliseconds) {
  return new Promise((resole, reject) => {
    setInterval(() => {
      resole('Successfully')
      resole('Successfully') // không resole được từ lần thứ 2
      resole('Successfully')
      resole('Successfully')
      // reject('Fail')
    }, miliseconds);
  })
}

timeout(1000)
  .then(data => {
    console.log(data);
  })

interval(1000)
  .then(data => {
    console.log(data);
  })

