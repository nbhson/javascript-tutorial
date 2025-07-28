Array.prototype.every2 = function (callBack) {
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      var result = callBack(this[key], key, this);
      if (!result) {
        return false;
      }
    }
  }
  return true;
};

var courses = [
  {
    name: "HTML",
    coin: 0,
  },
  {
    name: "CSS",
    coin: 0,
  },
  {
    name: "JS",
    coin: 0,
  },
];

var filter = courses.every2((course, index, rootArray) => {
  return course.coin === 0;
});

console.log(filter);
