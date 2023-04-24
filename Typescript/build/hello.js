console.log("Hello Typescript");
var x; //type inference to (any) 
x = 10;
console.log("x: ", x);
x = "abc";
console.log("x: ", x);
var y = 20; // type inference: (number)
y = 30;
console.log("y: ", y);
//y = "xyz"; //static type checking
var z; // type annotation (number)
z = 50;
//z = "100";
console.log("z: ", z);
