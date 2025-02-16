/**
 * INNER
 */
var boxElement = document.querySelector(".box");
boxElement.innerHTML = '<b style="color: red;">Sơn Nguyễn</b>'; // setter
console.log(boxElement.innerHTML); // getter

/**
 * Khi thêm một element cũng là thêm một attr & text
 * Nên có thể get ra attr cũng như text bên trong nó
 */
console.log(document.querySelector("b").getAttribute("style")); // color: red
console.log(document.querySelector("b").innerText); // Sơn Nguyễn

/**
 * OUTTER
 */
console.log(boxElement.outerHTML); // lấy ra luôn thẻ cha bên ngoài
boxElement.outerHTML = "<h1>Ghi đè</h1>"; // ghi đè luôn thẻ cha chứa nó