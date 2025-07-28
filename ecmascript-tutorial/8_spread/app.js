// NỐI MẢNG
var array1 = ["JS", "PHP", "Ruby"];
var array2 = ["CSS", "HTML"];
var array3 = [...array2, ...array1];
console.log(array3); // ['CSS', 'HTML', 'JS', 'PHP', 'Ruby']

// NỐI OBJECT
var obj1 = { name: "JS" };
var obj2 = { price: 1000 };
var obj3 = {
  ...obj1,
  ...obj2,
};
console.log(obj3); // {name: 'JS', price: 1000}

// GHI ĐÈ
var defaultConfig = {
  api: "https://domain-khoa-hoc",
  apiVersion: "v1",
  other: "other",
};
var exerciseConfig = {
  ...defaultConfig,
  api: "https://domain-bai-tap",
};
console.log(exerciseConfig); // thừa hưởng tất cả thuộc tính của defaultConfig, ghi đè api

// TRUYỀN THAM SỐ CHO HÀM
var arr = ["JS", "CSS", "HTML"];

function logger(...rest) {
  // Rest param
  console.log(rest);
}

logger(...arr); // Spread