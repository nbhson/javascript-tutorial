// NỘI DUNG
// - Một IIFE trông như thế nào
// - Phải có dấu ; phía trước mỗi IIFE, nếu không thì nó sẽ như này:
// - IIFE là một hàm "private"

// var fullName = 'Son Nguyen'()() => lỗi

// chưa phải IIFE
const callNow = function () {
  console.log("NOW");
};
callNow(); // PHẢI CÓ DẤU ; PHÍA TRƯỚC MỘT IIFE

// IIFE
(function () {
  console.log("NOW NOW");
})(); // () gọi hàm luôn sau khi tạo hàm
(function PrintMessage(message) {
  // HOẶC CÓ THỂ THÊM DẤU ; Ở ĐÂY :))
  console.log("Message: ", message);
  return message
})("Chao ban");
