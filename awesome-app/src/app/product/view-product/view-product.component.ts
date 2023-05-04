import { Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnChanges, OnInit , DoCheck, OnDestroy{

  @Input()
  public currentProduct!: Product;

  @Output()
  public cancelled: EventEmitter<string> = new EventEmitter<string>();

  @Output()
  public saved: EventEmitter<Product> = new EventEmitter<Product>();

  public temp!: Product;

  constructor() {
    console.log("constructor", this.currentProduct);
  }

  ngOnInit(): void {
    console.log("ngOnInit", this.currentProduct);
  }
  ngOnChanges(changes: SimpleChanges): void {

    console.log("ngOnChanges", this.currentProduct);
    this.temp = {...this.currentProduct};
  }

  ngDoCheck(): void {
    console.log("ngDoCheck");
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
  }
 

  save(){

    this.saved.emit(this.temp);

  }

  cancel(){

    const isConfirmed = confirm("Do you want to cancel");
    if(isConfirmed){
      this.cancelled.emit("Operation cancelled");
    }
    
  }


}
