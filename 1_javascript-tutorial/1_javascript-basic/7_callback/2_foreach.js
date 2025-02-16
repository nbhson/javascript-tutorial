// Những phương thức được xài của Array hoặc Object hoặc Number,... được định nghĩa sẵn trong prototype
// Chỉ cần . ra mà xài thôi

Array.prototype.forEach2 = function (callBack) {
  // khi lập qua forin nó lập luôn các thằng có trong _proto
  // bao gồm forEach2 vừa định nghĩa
  for (const key in this) {
    // hasOwnProperty: kiểm tra xem phần tử có nằm trong phương thức gần nhất không,
    // dùng để bỏ các key vừa định nghĩa thông qua prototype
    if (this.hasOwnProperty(key)) {
      callBack(this[key], key, this);
    }
  }
};

var courses = ["HTML", "CSS", "JS", "PHP"];

courses.forEach2((course, index, rootArray) => {
  console.log(course, index, rootArray);
});