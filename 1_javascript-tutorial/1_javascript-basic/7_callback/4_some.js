Array.prototype.some2 = function (callBack) {
  for (const key in this) {
    if (this.hasOwnProperty(key)) {
      var result = callBack(this[key], key, this);
      if (result) {
        // ngừng vòng lập luôn
        return true;
      }
    }
  }
  return false;
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

var filter = courses.some2((course, index, rootArray) => {
  return course.coin === 0;
});

console.log(filter);
