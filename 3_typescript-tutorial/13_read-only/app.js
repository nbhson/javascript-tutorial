/** Class */
var Employee = /** @class */ (function () {
    function Employee(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee;
}());
var emp = new Employee(10, "John");
var empObj = {
    empCode: 1,
    empName: "Steve"
};
var emp1 = {
    empCode: 1,
    empName: "Steve"
};
// emp1.empCode = 100; // Compiler Error: Cannot change readonly 'empCode'
// emp1.empName = "Bill"; // Compiler Error: Cannot change readonly 'empName'
var emp2 = {
    empCode: 1,
    empName: "Steve"
};
emp2.empCode = 100; // OK
emp2.empName = "Bill"; // OK
