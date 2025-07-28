/**
    CHUỖI TRONG JS
    1. Tạo chuỗi
        - Các cách tạo chuỗi
        - Nên sử dụng cách nào
        - Kiểm tra data type
    2. Một số case sử dụng backslash (\)
    3. Xem độ dài chuỗi
    4. Chú ý độ dài khi viết code
    5. Temple string ES6
 */

// Các cách để tạo chuỗi
var fullName_1 = 'Sơn Nguyễn' // typeof string
var fullName_2 = new String('Sơn Nguyễn') // typeof object

// backslash in js
var fullName_3 = 'Sơn Nguyễn \\ là \'Siêu Nhân\''
console.log(fullName_3); //  Sơn Nguyễn \ là 'Siêu Nhân'

// length (chỉ 80 kí tự trên 1 dòng)
var fullName_4 = 'Sơn Nguyễn'
console.log(fullName_4.length); //10

// temple string
var firstName = 'Sơn'
var lastName = 'Nguyễn'
var fullName_5 = `Tôi là ${firstName} ${lastName}`