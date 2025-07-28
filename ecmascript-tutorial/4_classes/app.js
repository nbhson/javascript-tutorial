// function Course (name, price) {
//     this.name = name
//     this.price = price
//     this.getName = function() {
//        return this.name
//     }
// }

class Course {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

Course.prototype.info = function () {
  console.log(this.name + ' ' + this.price);
}

let course = new Course('HTML', 'Free')
course.info()