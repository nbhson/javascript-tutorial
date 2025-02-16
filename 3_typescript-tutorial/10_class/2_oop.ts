class Person {
  protected firstName: string;
  protected lastName: string;
  protected age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  getFullInfo() {
    return `
      Full name: ${this.firstName} ${this.lastName}
      Age: ${this.age}
    `;
  }

  getAge() {
    return this.age;
  }

  getName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Student extends Person {
  private soccer: number;

  constructor(firstName: string, lastName: string, age: number, soccer: number) {
    super(firstName, lastName, age);
    this.soccer = soccer;
  }

  getFullInfo() {
    // thuộc tính dùng this
    // phương thức dùng super
    return `
      Full name: ${this.firstName} ${this.lastName} 
      Age: ${super.getAge()},  
      Soccer: ${this.soccer}
    `;
  }
}

let student = new Student("Sơn", "Nguyễn", 24, 9.5);
