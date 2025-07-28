/**
 * var/let: scope, hosting
 * var/const|let: assignment
 */

// scope: if else, loop, {},...
{
  let course = "JS Basic";
  {
    let course = "JS enhancement";
    console.log(course); // truy cập vào thằng gần nhất
  }
}

// hosting: var và các FUNCTION hỗ trợ hosting | nó sẽ đưa biến được định nghĩa lên đầu
console.log(a); // undefined | do biến a được tạo nhưng chưa được gán giá trị

var a = 1;
console.log(a); // 1

var a;
console.log(a); // 1 | do là var a được đưa lên đầu và được gán lại ở dòng 19

// assignment
const b = {
  name: "JS",
};

// gán lại được | const không gán lại được giá trị của chính biến a thôi, còn name hoặc các thuộc tính bên trong trong biến a thì thay được bình thường :))
// nếu gán b = 1 như thế này mới bị lỗi
b.name = "PHP";
b.age = 89

// TÌM HIỂU THAM TRỊ THAM CHIẾU TRONG JS
console.log(b);
console.log(b.name); // PHP
