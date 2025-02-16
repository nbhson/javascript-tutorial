// LẤY KEY CỦA OBJECT

var myInfo = {
  name: "Sơn Nguyễn",
  age: 18,
  address: "An Giang",
};

var language = ["HTML", "CSS", "JS", "PHP", "LARAVEL"];

var myString = "Sơn Nguyễn";

for (const key in myInfo) {
  console.log(myInfo[key]); // name, age, address
}

for (const key in language) {
  console.log(language[key]); // 0 1 2 3 4
}

for (const key in myString) {
  console.log(myString[key]); // S ơ n N g u y ễ n
}

/** chỉ lập qua các phần tử thực */
var courses = ["HTML", "CSS", "JS", "PHP"];
courses.length = 10;

console.log(courses); // ['HTML', 'CSS', 'JS', 'PHP', emptyx6]

// for in & foreach: chỉ lập qua các phần tử thực => 4
for (const key in courses) {
  console.log(courses[key]);
}
