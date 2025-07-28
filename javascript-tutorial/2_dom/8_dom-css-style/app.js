// https://www.w3schools.com/jsref/dom_obj_style.asp

var boxElement_1 = document.querySelector(".box-1");
boxElement_1.style.width = "100px"; // setter
boxElement_1.style.height = "100px";
boxElement_1.style.color = "white";
boxElement_1.style.backgroundColor = "red";

var boxElement_2 = document.querySelector(".box-2");
// setter
Object.assign(boxElement_2.style, {
  width: "100px",
  height: "100px",
  backgroundColor: "green",
});

// getter
console.log(boxElement_2.getAttribute("style"));
console.log(boxElement_2.style.backgroundColor);
