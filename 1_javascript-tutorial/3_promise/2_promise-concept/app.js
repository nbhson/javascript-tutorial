/**
 * Promise
 * - sync
 * - async
 */

// Sync: đồng bộ
// Async: bất đồng bộ
// Những thằng bất đồng bộ: setTimeout, setInterval, fetch, XMLHttpRequest, file reading, request animation frame

/** Lý thuyết, cách hoạt động */

// promise được sinh ra để giải quyết các vấn đề bất đồng bộ, trước khi promise được sinh ra (ES6)
// thì người ta dùng callback => và do callback có sinh ra callback hell nên promise được sinh ra để giải quyết các vấn đề đó

// có 3 trạng thái:
// 1. Pending: không có resolve, reject
// 2. Fullfilled: gọi resolve()
// 3. Reject: gọi reject()

// excutor: được thực thi trước khi nhận được giá trị tại biến var promise
// truyền vào 2 tham số: resolve/được giải quyết-thành công, reject/từ chối - thất bại
var promise = new Promise((resolve, reject) => {
  // không gọi resolve() hoặc reject() thì sẽ bị memory leak (rò kỹ bộ nhớ)
  // resolve([
  //   {
  //     id: 1,
  //     course: "HTML",
  //   },
  // ]);
  reject("404");
});

promise
  .then(function (result) {
    // resolve được gọi thì then được gọi
    console.log("Success", result);
  })
  .catch(function (error) {
    // reject được gọi thì catch được gọi
    console.log("Fail", error);
  })
  .finally(function () {
    console.log("Done");
  });