var courses = [
  {
    id: 1,
    name: "HTML",
    coin: 100,
  },
  {
    id: 2,
    name: "CSS",
    coin: 0,
  },
  {
    id: 3,
    name: "JS",
    coin: 150,
  },
  {
    id: 4,
    name: "PHP",
    coin: 0,
  },
  {
    id: 5,
    name: "LARAVEL",
    coin: 200,
  },
];

/** MAP | Trả về mảng mới */
var newCourses = courses.map((course, index, originArr) => {
  return {
    id: course.id,
    name: `Khoa hoc: ${course.name}`,
    coin: course.coin,
    coinText: `Gia: ${course.coin}`,
    index: index,
    originArr: originArr,
  };
});
console.log(newCourses);

/** REDUCE | Lấy được giá trị tích trữ */
// accumulator: biến lưu trữ
// currentValue: giá trị hiện tại
// currentIndex: index hiện tại
// originArr: mảng gốc
var totalCoin = courses.reduce(
  (accumulator, currentValue, currentIndex, originArr) => {
    return accumulator + currentValue.coin;
  },
  0
); // 0 giá trị khởi tạo được gán vào lần chạy đầu tiên | initial không bắt buộc
// console.log(totalCoin);

/** REDUCE 2 */
/**
Array.prototype.reduce2 = function (callback, result) {
  let i = 0;
  if (arguments.length < 2) {
    // không truyền initial value
    i = 1;
    result = this[0];
  }
  for (; i < this.length; i++) {
    result = callback(result, this[i], i.this);
  }
  return result;
};

const numbers = [1, 2, 3, 4, 5];
const result = numbers.reduce2((total, number) => {
  return total + number;
}, 10);
console.log(result)
*/
