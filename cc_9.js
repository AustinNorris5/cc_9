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

//Test Cases
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails());
console.log(emp1.calculateAnnualSalary());

//Task 2: Creating a Manager Class

//The Manager class should inherit from Employee
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize) {
        super(name, id, department, salary);
        this.teamSize = teamSize; //Add a new property
    };

//Override getDetails() to include the team size
    getDetails() {
        return `Manager: ${this.name}, ID: ${this,this.id}, Department: ${this.department}, Salary: $${this.salary}, Team Size; ${this.teamSize}`;
    };

//Add a method calculateBonus() that returns 10% of the manager’s annual salary
    calculateBonus() {
        return this.calculateAnnualSalary() * 0.1;
      };
};

//Test cases
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5);
console.log(mgr1.getDetails());
console.log(mgr1.calculateBonus()); 

//Task 3: Creating a Company Class

//Create a Company class
class Company {
    constructor(name) {
        this.name = name
        this.employees = [];
    };

//Add an employee to the array
    addEmployee(employee) {
        this.employees.push(employee);
    };

//Log all employee details
listEmployees() {
    this.employees.forEach(employee => console.log(employee.getDetails()));
    };
};

//Test cases
const company = new Company("TechCorp");
company.addEmployee(emp1);
company.addEmployee(mgr1);
company.listEmployees();
 