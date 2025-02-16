/**
 * innerText & textContent đều không thể thêm element vào html
 * Ex: heading.innerText = '<i>New heading</i>' => đây là text và không đc in nghiêng
 *
 * => innerText & textContent ko đọc được các thẻ tag => nó vẫn là text
 */

var heading = document.querySelector("h1");

console.log([heading]);

// getter
console.log(heading.innerText); // trả về đúng những gì nhìn thấy trên giao diện trang web (lượt bỏ thẻ tag)
console.log(heading.textContent); // trả về nguyên bản những gì có trong .HTML (lượt bỏ thẻ tag)

// setter (NGƯỢC VỚI GETTER khi sử dụng innerText (hiệu ứng như textContent) & textContent (hiệu ứng như innerText))
heading.innerText = "<i>New heading</i>";