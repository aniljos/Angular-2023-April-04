//default
//import addFromOne from './one.js';

//named
//import {multiply, version} from './one.js';

import addFromOne, {multiply, version} from './one.js';


console.log("in two.ts");
function add(x, y){

    console.log("in two.ts add");
    return x + y;
}

function process(): void{

    addFromOne(3, 4); // in one.ts
    add(2, 3); //in two.ts
    console.log("in process of two.ts");
}

export default process; 