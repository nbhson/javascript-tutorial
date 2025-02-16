// preventDefault() ngăn chặn hành vi mặc định  của html

// vd 1
var eElement = document.links;
console.log(eElement);
for (let i = 0; i < eElement.length; i++) {
  eElement[i].onclick = function (event) {
    if (event.target.href !== "http://facebook.com/") {
      console.log(event.target.href);
      event.preventDefault();
    }
  };
}

// vd 2
var ul = document.querySelector("ul");
ul.onmousedown = function (e) {
  e.preventDefault();
};

// stopPropagation() ngăn chặn sự kiện nổi bọt
document.querySelector("#div").onclick = function (e) {
  console.log("div");
};

document.querySelector("#button").onclick = function (e) {
  e.stopPropagation();
  console.log("button");
};
