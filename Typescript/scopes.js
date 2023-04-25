// Hoisting
//var x, y

console.log("x: ", x); //undefined
var x = 10;
console.log("x: ", x);  //10

var y;
console.log("y:", y); // undefined

//console.log("z", z); // exception


function foo(){
    //var msg
    //console.log("msg", msg);
    console.log("foo");
    if(x < 100){
        let msg = "hello";
        console.log("msg", msg); // hello
    }
    

}


foo();

console.log("App over");