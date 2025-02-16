/**
    CÁC KIỂU SO SÁNH

    == -> bằng (so sánh trừu tượng - cố gắng giải quyết kiểu dữ liệu thông qua chuyển đổi kiểu dữ liệu trước khi so sánh)
    != -> không bằng
    > -> lớn hơn
    < -> nhỏ hơn
    >= -> lớn hơn hoặc bằng
    <= -> bé hơn hoặc bằng

    === (so sánh nghiêm ngặt - false nếu các giá trị khác nhau, NÊN SỬ DỤNG VÌ SẼ TĂNG TÍNH RÕ RÀNG CỦA CODE)
    !==
 */

/**
    CÓ 7 FALSY

    Kiểu dữ liệu        falsy value
    number              0 và NaN
    string              '' và ""
    boolean             false
    null                null
    undefine            undefined
*/

console.log(3 == "3"); // TRUE - chuyển "3" thành 3
console.log(3 === "3"); // FALSE - khác kiểu dữ liệu

console.log(true == "1"); // TRUE - chuyển "1" về thành 1, là 1 truthy
console.log(true === '1'); // FALSE - khác kiểu dữ liệu

console.log(undefined == null); // true
console.log(undefined === null); // false

console.log(true == 'true'); // false. A string will not be converted to a boolean and vice versa.
console.log(true === 'true'); // false

console.log("This is a string." == new String("This is a string.")); // true
console.log("This is a string." === new String("This is a string.")); // false - string VỚI object