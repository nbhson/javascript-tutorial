abstract class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  display(): string {
    return this.name;
  }

  // bắt buộc lớp con phải override
  abstract find(string): Person;
}

class Employee extends Person {
  empCode: number;

  constructor(name: string, code: number) {
    super(name);
    this.empCode = code;
  }

  find(name: string): Person {
    return new Employee(name, 1);
  }
}

let emp: Employee = new Employee("James", 100);
emp.display(); //James
let emp2: Person = emp.find("Steve");
