const worker = new Worker('service_worker.js')

const sumBtn = document.querySelector('#sumBtn')
const bgBtn = document.querySelector('#bgBtn')

sumBtn.addEventListener('click', (e) => {
  // postMessage: gửi message sang worker
  worker.postMessage('hello, worker')
})

bgBtn.addEventListener('click', (e) => {
  if (document.body.style.background !== 'green') {
    document.body.style.background = 'green'
  } else {
    document.body.style.background = 'blue'
  }
})

// onmessage: nhận message từ worker
worker.onmessage = function(message) {
  console.log(message);
}
