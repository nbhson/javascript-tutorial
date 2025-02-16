var boxElement = document.querySelector(".box-1");

// all class
console.log(boxElement.classList);

// add: thêm class vào element
boxElement.classList.add("red", "shadow", "blue");

// contains: kiểm tra 1 class có nằm trong element đó hay không
console.log(boxElement.classList.contains("red")); // true

// remove: xóa class
boxElement.classList.remove("blue", "shadow");

// toggle: thêm elment có class nó sẽ xóa bỏ, còn ko có thì nó thêm vào
boxElement.addEventListener("click", () => {
  boxElement.classList.toggle("pink");
});