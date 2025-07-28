// API -> Application programing interface
// Cổng giao tiếp giữa các phần mềm

var postApi1 = "https://jsonplaceholder.typicode.com/posts";
var postApi2 = "https://jsonplaceholder.typicode.com/todos";

/** Ví dụ 1 */
// fetch(postApi1)
//   .then(function (res) {
//     return res.json(); // HTTP response to data (Promise)
//   })
//   .then(function (posts) {
//     console.log(posts);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

/** Ví dụ 2 - Multi fetch */
Promise.all([
  fetch(postApi1).then((posts) => posts.json()),
  fetch(postApi2).then((todos) => todos.json()),
]).then((res) => {
  let posts = res[0]
  let todos = res[1]
  return posts.concat(todos);
}).then(data => {
  console.log(data);
})
.catch(error => {
  console.log(error);
})
