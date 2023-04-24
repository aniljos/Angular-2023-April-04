
// function sum(){
//     console.log("in sum no args");
// }

//functions: explicit args(x, y) => passed on invokation
//functions: implicit args => this, arguments
// function: global
function sum(x, y){
    console.log("in sum", arguments);
}

sum(2,3);
window.sum();
sum(1,2,"3",4,5);