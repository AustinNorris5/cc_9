//Task 1: Creating an Employee Class

//Create a class 
class Employee {
    constructor(name, id, department, salary) {
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
    };

//Add a method that returns a formatted string of employee details
    getDetails() {
    return `Employee: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: $${this.salary}`;
    };

//Add a method that returns the employee’s annual salary
    calculateAnnualSalary() {
        return this.salary * 12;
    };
};

//Instantiate an employee object and log its details to the console
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());