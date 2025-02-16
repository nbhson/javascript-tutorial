/** Class */
class Employee {
  readonly empCode: number;
  empName: string;

  constructor(code: number, name: string) {
    this.empCode = code;
    this.empName = name;
  }
}

let emp = new Employee(10, "John");
// emp.empCode = 123 // Error

/** Interface */
interface IEmployee {
  readonly empCode: number;
  empName: string;
}

let empObj: IEmployee = {
  empCode: 1,
  empName: "Steve",
};
// empObj.empCode = 100; // Error

/** ReadOnly Type */
interface IEmployee2 {
  empCode: number;
  empName: string;
}

let emp1: Readonly<IEmployee2> = {
  empCode: 1,
  empName: "Steve",
};
// emp1.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
// emp1.empName = "Bill"; // Compiler Error: Cannot change readonly 'empName'

let emp2: IEmployee2 = {
  empCode: 1,
  empName: "Steve",
};
emp2.empCode = 100; // OK
emp2.empName = "Bill"; // OK
