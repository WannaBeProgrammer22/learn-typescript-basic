"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// create a class
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good day " + this.employeeName);
    };
    return Employee;
}());
// create instance
var me = new Employee('Jerwin');
// call properties
// console.log(me.employeeName);
// call method
me.greet();
// possible class based inheritance
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    // entrust (a task or responsibility) to another person
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks");
    };
    return Manager;
}(Employee));
var managerMe = new Manager('Jerwin');
// employee method
managerMe.greet();
// manager method
managerMe.delegateWork();
// employee inherited properties
// console.log(managerMe.employeeName);
// access modifiers - are keywords that set accessible of the properties and methods of a class
// default each properties and methods has an access modifier of 
// public - means u can access them directly
// private - u can only use this property or method within the class, u cannot access this outside the class to secure the class properties and prevent direct edit and u cannot use it at the derived class or the child class but using the
// protected - u can access the parent property in the derived class and u cannot access it outside
