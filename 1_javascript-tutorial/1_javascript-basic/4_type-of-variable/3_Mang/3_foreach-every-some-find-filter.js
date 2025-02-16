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

/** FOREACH */
courses.forEach((course, index) => {
  console.log(index, course);
});

/** EVERY (boolean) | TẤT CẢ các phần tử của mảng đều phải khỏa mãn điều kiện nào đó thì mới trả TRUE */
var isFree = courses.every((course, index) => {
  return course.coin === 0;
});
// console.log(isFree);

/** SOME (boolean) | CHỈ 1 phần tử của mảng thỏa mãn điều kiện thì trả về TRUE */
var isFree = courses.some((course, index) => {
  return course.coin === 0;
});
// console.log(isFree);

/** FIND | tìm phần tử và trả về obj chứa phần tử đó */
var find = courses.find((course, index) => {
  return course.name === "PHP";
});
// console.log(find);

/** FILTER | tìm phần tử và trả về TẤT CẢ các obj chứa phần tử đó */
var filter = courses.filter((course, index) => {
  return course.coin === 0;
});
// console.log(filter);
