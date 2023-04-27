
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

var obj = {
    id: 100,
    print: function(){

        var x = 5; //closures
        console.log("Id", this.id);
        console.log("x", x);

        setTimeout(function(){

           //var x = 15;
            console.log("invoked after 2 secs: ", this.id);
            x++;
            console.log("invoked after 2 secs x", x);

        }, 2000);

        

        console.log("print is over: ", x);
    }
}

obj.print();

