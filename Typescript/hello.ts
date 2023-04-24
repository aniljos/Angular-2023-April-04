console.log("Hello Typescript");

var x; //type inference to (any) 
x = 10;
console.log("x: ", x);
x  = "abc";
console.log("x: ", x);

var y = 20;  // type inference: (number)
y = 30;
console.log("y: ", y);
//y = "xyz"; //static type checking

var z : number; // type annotation (number)
z = 50;
//z = "100";
console.log("z: ", z);

var user: {id: number, name: string};
console.log("user: ", user);

user = {id: 1, name: "Anil"};
console.log("user: ", user);

var test = {id : 1, name: "AJ"};

var product : [number, string, number ];

product = [1, "Prd1", 2000];

console.log("products", product);


