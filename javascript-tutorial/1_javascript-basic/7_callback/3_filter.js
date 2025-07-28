Array.prototype.filter2 = function (callBack) {
  var output = [];

  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      var result = callBack(this[key], key, this);
      if (result) {
        output.push(this[key]);
      }
    }
  }

  return output;
};

var courses = [
  {
    name: "HTML",
    coin: 0,
  },
  {
    name: "CSS",
    coin: 550,
  },
  {
    name: "JS",
    coin: 700,
  },
];

var filter = courses.filter2((course, index, rootArray) => {
  return course.coin === 0;
});

console.log(filter);
