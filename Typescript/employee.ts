class Employee{
    //public id: number;
    //, name, salary
 
    private _location: string;
    constructor(public id: number, public name: string, public salary:number){
    }

    //property
    public get location(){
        return this._location;
    }
    public set location(value){
        this._location = value;
    }

}

var emp = new Employee(1, "Anil", 40000);
console.log("Id", emp.id);
console.log("Name", emp.name);
console.log("Salary", emp.salary);

emp.location = "Mumbai";
console.log("Location", emp.location);



