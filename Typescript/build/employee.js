class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    //property
    get location() {
        return this._location;
    }
    set location(value) {
        this._location = value;
    }
}
var emp = new Employee(1, "Anil", 40000);
console.log("Id", emp.id);
console.log("Name", emp.name);
console.log("Salary", emp.salary);
emp.location = "Mumbai";
console.log("Location", emp.location);
