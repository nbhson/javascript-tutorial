/**
 * Promise.resolve
 * Promise.reject
 * Promise.all
 */
// var promise = new Promise(
//   function(resolve, reject){
//      resolve('Success') // lọt vào resolve
//      reject('Fail') // lọt vào reject
//   }
// )

/*
  Promise.resolve chỉ muốn nhận thành công
  Promise.reject chỉ muốn nhận thất bại
 */

// var promise = Promise.resolve("Success!");
// promise
//   .then(function (result) {
//     console.log(result);
//     return result // chay tiếp vào .then
//     return Promise.reject("Error!"); // chạy vào .catch
//   })
//   .then(function (result) {
//     console.log(result);
//     return result;
//   })
//   .catch(function (error) {
//     console.log("Error: ", error);
//   })
//   .finally(function () {
//     console.log("finally");
//   });

// Promise.all chạy song song
var promise1 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("5s");
    resolve([1]);
  }, 5000);
});
var promise2 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log("2.5");
    resolve([2, 3]);
  }, 2500);
});
var promise3 = Promise.reject("Fail"); // nếu trong tất cả có thằng nào reject thì .all là fail luôn

Promise.all([promise1, promise2]) // thực hiện hết tất cả bất đồng bộ ở đây mới chạy xuống .then hoặc .catch
  .then(function (result) {
    var arr1 = result[0];
    var arr2 = result[1];

    console.log(arr1); // [1]
    console.log(arr2); // [2, 3]
    console.log(arr1.concat(arr2)); // [1, 2, 3]
  }) 
  .catch(function (error) {
    console.log(error);
  });