/**
 * # Public
 *    Tất cả các thành phần trong class mặc định đều là public
 *    Có thể được truy cập ở bất cứ đâu mà không có bất kỳ hạn chế nào.
 */

class Employee {
  public empCode: number;
  empName: string;
}

let emp = new Employee();
emp.empCode = 123;
emp.empName = "Swati";

/**
 * # Private
 *   Chỉ hiển thị đối với lớp đó và không thể truy cập được bên ngoài lớp chứa
 */
class Employee2 {
  private empCode: number;
  empName: string;
}

let emp2 = new Employee2();
// emp2.empCode = 123; // Compiler Error
emp2.empName = "Swati"; //OK

/**
 * # Protected
 */
class Employee3 {
  public empName: string;
  protected empCode: number;

  constructor(name: string, code: number) {
    this.empName = name;
    this.empCode = code;
  }
}

class SalesEmployee extends Employee3 {
  private department: string;

  constructor(department: string, name: string, code: number) {
    super(name, code);
    this.department = department;
  }

  getCode() {
    return this.empCode; // như private nhưng có thể truy cập ở lớp con | private thì chỉ trong lớp của nó
  }
  getDepartment() {
    return this.department;
  }
}
let emp3 = new SalesEmployee("Sales", "John Smith", 123);
console.log(emp3.empName);
console.log(emp3.getCode());
console.log(emp3.getDepartment());
