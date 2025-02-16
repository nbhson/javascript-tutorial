/** Create Class */
class Employee1 {
  empCode: number;
  empName: string;
}
let emp1 = new Employee1();

/** Class with Constructor */
class Employee2 {
  private empCode: number;
  private empName: string;

  constructor(code: number, name: string) {
    this.empName = name;
    this.empCode = code;
  }

  getCode(): number {
    return this.empCode;
  }
  getName(): string {
    return this.empName;
  }
}
let emp2 = new Employee2(2, "Sơn");
