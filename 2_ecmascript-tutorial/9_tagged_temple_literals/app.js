// sử dụng destructering và rest để bóc phần tử ở vị trí thứ 0 (rest_0)
// sử dụng rest_1 để lấy 2 phần tử còn lại trong mảng
function highlight([first, ...rest_0], ...rest_1) {
  // console.log(first); // "Học lập trình"
  // console.log(rest_0); // [" tại ", "!"]
  // console.log(rest_1); // ["JS", "F8"]

  return rest_1.reduce((previousValue,currentValue) => 
    [...previousValue, `<span>${currentValue}</span>`, rest_0.shift()],
    [first]
  ).join('') // biến mảng thành chuỗi
}

var brand = 'F8'
var cousre = 'JS'

// [["Học lập trình ", " tại ", "!"], "JS", "F8"]
const html = highlight`Học lập trình ${cousre} tại ${brand}!`;

// phần tử vị trí thứ 0: là MẢNG các phần tử trước sau và giữa các biến nội suy
// => ["Học lập trình ", " tại ", "!"]

// phần tử vị trí thứ 1 và các vị trí tiếp theo là MẢNG của các biến nội suy
// => ["JS"]
// => ["F8"]
console.log(html);



