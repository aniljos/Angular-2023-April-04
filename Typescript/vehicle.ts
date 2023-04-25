interface Vehicle{
    
    name: string;
    speed: number;
    gears?: number;

    applyBrakes(speed: number): void;
}

class Car implements Vehicle{

    name: string;
    speed: number;
    gears: number;

    //constructor declartions(*)
    constructor();
    constructor(name: string, speed: number);
    constructor(name: string, speed: number, gears: number);

    //constructor implementation(1)
    constructor(name?: string, speed?: number, gears?: number){

        this.name = name;
        this.speed = speed;
        this.gears = gears;

    }

    applyBrakes(speed: number): void {
        
        this.speed -= speed;

    }
}

var car1 = new Car();
car1.name = "BMW 1"; car1.speed=140; car1.gears=5;
console.log("car1", car1);

var car2 = new Car("Audi", 130, 6);
console.log("car2", car2);
car2.applyBrakes(20);
console.log("car2", car2);

