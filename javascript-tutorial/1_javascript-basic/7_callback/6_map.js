// Làm việc với callback
var courses = ["HTML", "CSS", "JS", "PHP"];

Array.prototype.map2 = function (callBack) {
  var arrLength = this.length;
  var result = [];
  for (let i = 0; i < arrLength; i++) {
    var course = callBack(this[i], i);
    result.push(course);
  }

  return result;
};

var map2 = courses.map2((course, index) => {
  return course + " (free)";
});

console.log(map2);
