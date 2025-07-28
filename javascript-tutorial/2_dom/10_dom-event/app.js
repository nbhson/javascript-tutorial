// DOM EVENT (w3school)

// 1. Attribute event (viết sự kiện như 1 attr của element, thêm on phía trước onClick, onCoppy)
// 2. Assign event using element node
// 3. https://www.w3schools.com/jsref/dom_obj_event.asp

let elementEvent = document.querySelector("h1").nextElementSibling;
elementEvent.onclick = function (e) {
  // e sẽ trả về một MouseEvent: bao gồm nhiều thông tin khi click được diễn ra
  console.log(e);
  elementEvent.style.color = "red";
};
