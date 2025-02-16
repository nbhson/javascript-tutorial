/** Temple string */
var employeeName = "John Smith";
var employeeDept = "Finance";
// Pre-ES6 
var employeeDesc1 = employeeName + " works in the " + employeeDept + " department.";
// Post-ES6 
var employeeDesc2 = "".concat(employeeName, " works in the ").concat(employeeDept, " department.");
console.log(employeeDesc1); //John Smith works in the Finance department. 
console.log(employeeDesc2); //John Smith works in the Finance department. 
// charAt()
console.log("Sơn Nguyễn".charAt(0)); // S
// concat()
console.log('Sơn'.concat(' Nguyễn'));
// indexOf()
console.log("Sơn Nguyễn".indexOf("Ng"));
