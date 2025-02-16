var Iterator = function (items) {
  this.index = 0;
  this.items = items;
}

Iterator.prototype = {
  myEach: function (callback) {
    for (const key in this.items) {
      if (Object.hasOwnProperty.call(this.items, key)) {
        callback(this.items[key], this.index)
        this.index++
      }
    }
  }
}

var items = ["one", 2, "circle", true, "Applepie"];
var iter = new Iterator(items);

iter.myEach(function (item, index) {
  console.log(index, item);
});