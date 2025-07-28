var promise = new Promise((resolve, reject) => {
  // không gọi resolve() hoặc reject() thì sẽ bị memory leak (rò kỹ bộ nhớ)
  resolve();
});

promise
  .then(function () {
    // nếu return là 1 promise thì cần chờ xong mới qua .then thứ 2
    let promise = new Promise(function (resolve) {
      setTimeout(() => {
        resolve("Success");
      }, 3000);
    });
    return promise;
    // return 1
  })
  .then(function (data) {
    // nếu .then trước đó không có return thì nó sẽ chạy thằng tiếp theo,
    // và giá trị data là undefined do chưa định nghĩa
    console.log(data);
    return 2;
  })
  .then(function (data) {
    console.log(data); // 2

    // khi một mắt xích có lỗi nó sẽ handle trong .catch
    // code dừng tại chỗ có lỗi
    return new Promise(function (resolve, reject) {
      setTimeout(() => {
        reject("Co loi");
      }, 3000);
    });
  })
  .then(function (data) {
    console.log(data);
    console.log(3);
    return 3;
  })
  .catch(function (error) {
    console.log("Fail", error);
  })
  .finally(function () {
    console.log("Done");
  });
