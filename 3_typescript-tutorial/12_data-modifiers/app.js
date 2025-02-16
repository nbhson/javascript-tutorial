/**
 * # Public
 *    Tất cả các thành phần trong class mặc định đều là public
 *    Có thể được truy cập ở bất cứ đâu mà không có bất kỳ hạn chế nào.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
var emp = new Employee();
emp.empCode = 123;
emp.empName = "Swati";
/**
 * # Private
 *   Chỉ hiển thị đối với lớp đó và không thể truy cập được bên ngoài lớp chứa
 */
var Employee2 = /** @class */ (function () {
    function Employee2(code, name) {
        this.empCode = code;
        this.empName = name;
    }
    return Employee2;
}());
var XXX = /** @class */ (function (_super) {
    __extends(XXX, _super);
    function XXX(age, code, name) {
        var _this = _super.call(this, code, name) || this;
        _this.age = age;
        return _this;
    }
    return XXX;
}(Employee2));
var emp2 = new Employee2(23, 'Sơn');
console.log(emp2);
// emp2.empCode = 123; // Compiler Error
// emp2.empName = "Swati"; //OK
/**
 * # Protected
 */
var Employee3 = /** @class */ (function () {
    function Employee3(name, code) {
        this.empName = name;
        this.empCode = code;
    }
    return Employee3;
}());
var SalesEmployee = /** @class */ (function (_super) {
    __extends(SalesEmployee, _super);
    function SalesEmployee(department, name, code) {
        var _this = _super.call(this, name, code) || this;
        _this.department = department;
        return _this;
    }
    SalesEmployee.prototype.getCode = function () {
        return this.empCode; // như private nhưng có thể truy cập ở lớp con của nó
    };
    SalesEmployee.prototype.getDepartment = function () {
        return this.department;
    };
    return SalesEmployee;
}(Employee3));
// let emp3 = new SalesEmployee("Sales", "John Smith", 123);
// console.log(emp3.empName); //Compiler Error
// console.log(emp3.getCode());
// console.log(emp3.getDepartment());
