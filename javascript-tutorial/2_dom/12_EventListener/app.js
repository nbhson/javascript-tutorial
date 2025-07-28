// 1. Dom event / Event listener
// 2. JSON
// 3. Fetch
// 4. Dom location
// 5. Local storage
// 6. Session storage
// 7. Coding convention
// 8. Best practices
// 10. Performance

// DOM Event có thể hủy lắng nghe trong trường hợp gán nó lại bằng 1 func rỗng

function viec1() {
  console.log("Việc 1");
}
function viec2() {
  console.log("Việc 2");
}

var btn = document.querySelector("button");
btn.addEventListener("click", viec1);
btn.addEventListener("click", viec2);

setTimeout((e) => {
  btn.removeEventListener("click", viec1);
}, 5000);
