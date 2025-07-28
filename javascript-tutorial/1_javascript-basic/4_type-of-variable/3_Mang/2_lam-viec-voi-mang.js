/**
 *  Array methods
    1. toString()
    2. Join (as toString())
    3. Pop - xóa phần tử cuối và trả về phần tử đã xóa, khi mảng không còn phần tử nào thì trả về undefine
    4. Push
    5. Shift - xóa phần tử đầu mảng và trả về phần tử đã xóa
    6. Unshift - thêm phần tử vào đầu mảng
    7. Splicing - xóa, cắt, chèn phần tử mới vào mảng
    8. Concat - nối arr
    9. Slicing - cắt
 */

var language = ['HTML', 'CSS', 'JS', 'PHP'];

// ARRAY TO STRING
console.log(language.toString()); // HTML,CSS,JS,PHP
console.log(language.join()); // HTML,CSS,JS,PHP
console.log(language.join(' - ')); // HTML - CSS - JS - PHP

// XÓA VÀ THÊM PHẦN TỪ VÀO CUỐI MẢNG
language.pop()
console.log(language); // [ 'HTML', 'CSS', 'JS' ]
language.push('Node', 'OPS')
console.log(language); // [ 'HTML', 'CSS', 'JS', 'Node', 'OPS' ]

// XÓA VÀ THÊM PHẦN TỬ VÀO ĐẦU MẢNG
language.shift()
console.log(language);  // [ 'CSS', 'JS', 'Node', 'OPS' ]
language.unshift('First', 'Sencond')
console.log(language); // [ 'First', 'Sencond', 'CSS', 'JS', 'Node', 'OPS' ]

// DELETE | param: start, deleteCount
language.splice(1, 2) // delete Sencond và CSS
// language.splice(1) // delete từ Sencond đến cuối
console.log(language); //  [ 'First', 'JS', 'Node', 'OPS' ]

// ADD | param: start, deleteCount, [elementAdd,...]
language.splice(1, 0, 'Second', 'Third')
console.log(language); //  ['First', 'Second', 'Third', 'JS', 'Node', 'OPS' ]
console.log(language.slice(1,3)); // [ 'Second', 'Third' ]