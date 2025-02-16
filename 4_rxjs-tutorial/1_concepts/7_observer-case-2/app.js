/**
 * Observer là một object chứa tập hợp các callback
 * giúp chúng ta lắng nghe những giá trị từ Observable
 * {next, error, completed}
 */

const observer = {
  next: (data) => {
    console.log(data);
  },
  error: (error) => {
    return error
  },
  completed: () => {
    console.log('Completed');
  }
}

const subscription = Observable.interval(1000)
  .subscribe(observer) 
