export { }

// create a class
class Employee {
  private employeeName: string;

  constructor(name: string) {
    this.employeeName = name;
  }

  greet() {
    console.log(`Good day ${this.employeeName}`);
  }
}

// create instance
const me = new Employee('Jerwin');
// call properties
// console.log(me.employeeName);
// call method
me.greet();

// possible class based inheritance
class Manager extends Employee {

  constructor(managerName: string) {
    super(managerName);
  }

  // entrust (a task or responsibility) to another person
  delegateWork() {
    console.log(`Manager delegating tasks`);
  }
}


let managerMe = new Manager('Jerwin');

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
