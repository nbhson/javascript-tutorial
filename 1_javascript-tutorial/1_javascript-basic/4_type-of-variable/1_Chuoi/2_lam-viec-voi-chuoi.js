// keyword: JS string methods

// 1. length - length()
// 2. find index - indexOf('gia_tri_tim) - search('gia_tri_tim)
// 3. cut string - slice(from_index, to_index)
// 4. replace - replace('gia_tri_tim','gia_tri_thay_doi')
// 5. upper case - uppercase()
// 6. lower case - lowercase()
// 7. trim - trim()
// 8. splip - splip(diem_chung)
// 9. get a character by index - charAt(index)

var myString = 'Hoc JS tai JS F8 JS!'

//1 LENGTH
console.log(myString.length); // 20

// 2 FIND INDEX
/* 
  - kết quả -1 là không tìm thấy
  - chỉ tìm thấy kết quả đầu tiên, tham số thứ 2 dùng để bỏ qua kết quả
  đầu tiên để tìm kết quả thứ 2
  - hàm search giống với indexOf nhưng không hỗ trợ tham số thứ 2 nhưng
  tìm kiếm được dưới dạng biểu thức chính quy
 */
console.log(myString.indexOf('JS')); // 4
console.log(myString.lastIndexOf('JS')); // 17
console.log(myString.search('JS')); // 4

// 3 CUT STRING
/* 
  - cắt từ trái sang phải lấy hết hoặc lấy bao nhiêu kí tự
  - cắt từ phải sang trái
 */
console.log(myString.slice(4,6)); // từ index 4 đến 6 -> JS
console.log(myString.slice(4)); // từ 4 đến cuối chuỗi -> JS tai JS F8 JS!
console.log(myString.slice(0)); // cả chuỗi
console.log(myString.slice(-6,-4)); // từ index -6 đến -4 -> F8

// 4 REPLACE
/* 
  - chỉ thay đổi 1 ký tự
  - muốn thay đổi tất cả ký tự trong chuỗi cần use biểu thức chính quy
 */
console.log(myString.replace('JS','Javascript')); // Hoc Javascript tai JS F8 JS!
console.log(myString.replace(/JS/g,'Javascript')); // Hoc Javascript tai Javascript F8 Javascript!

// 5 UPPERCASE - LOWERCASE
console.log(myString.toUpperCase()); // HOC JS TAI JS F8 JS!
console.log(myString.toLowerCase()); // hoc js tai js f8 js!

// 6 TRIM
console.log(myString.trim());

// 7 Split
/*
  - cắt chuỗi thành Array
  - cần truyền vào điểm chung
 */
var language = 'PHP, JS, CSS, HTML'
var js = 'Javascript'
console.log(language.split(',')); // [ 'PHP', ' JS', ' CSS', ' HTML' ]
console.log(js.split()); // ['Javascript']
console.log(js.split('')); // ['J', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// 8 INDEX AS ARRAY
var myString2 = 'Sơn Nguyễn'
console.log(myString2.charAt(1)); // ơ
console.log(myString2['1']); // ơ
