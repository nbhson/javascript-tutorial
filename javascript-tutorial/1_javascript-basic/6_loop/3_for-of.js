// LẤY TỪNG PHẦN TỬ CỦA MẢNG
var language = ["HTML", "CSS", "JS", "PHP", "LARAVEL"];

var myString = "Sơn Nguyễn";

for (const iterator of language) {
  console.log(iterator);
}

for (const iterator of myString) {
  console.log(iterator);
}

/** SỬ DỤNG VỚI OBJECT THÌ CẦN PHẢI BIẾN ĐỔI MỘT CHÚT */
var myInfo = {
  name: "Sơn Nguyễn",
  age: 18,
  address: "An Giang",
};

// sử dụng đối tượng object để lấy key của object
var arrKeys = Object.keys(myInfo); // [name, age , address]
var arrValue = Object.values(myInfo); // [Sơn Nguyễn, 18, An Giang]

for (const iterator of arrKeys) {
  console.log(myInfo[iterator]);
}

for (const iterator of arrValue) {
  console.log(iterator);
}
