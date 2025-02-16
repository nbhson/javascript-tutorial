/**
 * Built - in Object là các đối tượng 
 * được xây nhà cung cấp xây dựng sẵn 
 * (hay còn gọi là được tích hợp sẵn). 
 * Chúng ta chỉ cần lấy ra và sử dụng.
 * 
 * Một số hàm built in
 * alert()
 * console()
 * confirm()
 * prompt()
 * setTimeout() - clearTimeout()
 * setInterval() - clearInterval()
 */

alert("Xin chào đến với website!")

confirm("Xác nhận đã đủ 18 tuổi?")

prompt("Nhập tên của bạn:")

setTimeout(() => {
    console.log("setTimeout");
}, 1000);

setInterval(() => {
    console.log("setInterval")
}, 1000)