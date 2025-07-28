// API -> Application programing interface
// Cổng giao tiếp giữa các phần mềm

var postApi = "http://localhost:3000/coures";

fetch(postApi)
  .then(function (res) {
    return res.json(); // HTTP response to data (Promise)
  })
  .then(function (posts) {
    console.log(posts);
  })
  .catch(function (error) {
    console.log(error);
  });
