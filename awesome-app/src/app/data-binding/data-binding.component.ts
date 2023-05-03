import { Component } from "@angular/core";

class FavoriteColors{
    
    red: boolean = false;
    blue:boolean = false;
    green: boolean = false;
    
}
@Component({
    selector: "data-binding",
    templateUrl: "./data-binding.component.html"
})
export class DataBindingComponent{

    name: string;
    count : number;
    message: string = "Hello";
    favoriteColors: FavoriteColors;

    constructor(){
        this.name = "Anil Joseph";
        this.count = 10;
        //this.message = "Hello";
        this.favoriteColors = new FavoriteColors();
    }

    inc(evt: any){
        console.log("in increment", evt);
        this.count++;
    }

    setCount(evt: any){
        console.log("in setCount", evt);
        this.count = evt.target.value;
    }
}