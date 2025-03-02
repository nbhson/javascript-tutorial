function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;

  this.getFullName = function(age) {
    return `${this.firstName} ${this.lastName} - ${age}`
  }
}

function Student(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

const sonNguyen = new Person('Son', 'Nguyen');
const trinhHuynh = new Student('Trinh', 'Huynh');

const trinhHuynhFullName = sonNguyen.getFullName.bind(trinhHuynh, 18);
console.log(trinhHuynhFullName());