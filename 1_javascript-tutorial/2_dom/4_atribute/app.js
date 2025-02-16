/**
 * Chỉ thêm được các attribute hợp lệ với element của nó thôi
 * Nếu muốn sử dụng các attribute không có sẵn của element đó thì dùng hàm setAttribute(name, value)
 * Lấy ra giá trị của attribute thì dùng getAttribute(keyAttrName)
 */

var heading = document.querySelector("h1");
heading.className = "class-name"; //setter
heading.id = "heading id"; //setter
heading.title = "heading title"; //setter
heading.style = "color: red";

var link = document.querySelector("a");
link.href = "https://google.com"; //setter
link.setAttribute("everything", "everything");
link.setAttribute("id", "id");
link.setAttribute("class", "link");
link.setAttribute("style", "color: red;");

console.log(link.getAttribute("everything")); // getter
console.log(link.id); // với những attribute hợp lệ chỉ cần . ra mà dùng
