import { Component } from '@angular/core';
import { GadgetService } from '../gadget.service';
import { Product } from '../../model/Product';
import { CartItem } from '../../model/CartItem';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {

  public products: Array<Product> = [];
  constructor(private service: GadgetService){

    //Observabes
    // service.getProducts().subscribe({
    //   next: (products) => {
    //     console.log("products", products);
    //   },
    //   error: (err) => {

    //   }
    // });

    //Callbacks
    // service.getProductsWithCallback((data) => {
    //   console.log("sucess data", data);
    // }, (err)=> {
    //   console.log("err", err);
    // });

    //Promises
    // async - await(ES6) 
    service.getProductsWithPromise().then((data) => {
      console.log("success data", data);
      this.products = data;
    }, (err) => {
      console.log("err data", err);
    })
  }


  add(product: Product, qty: string){

    this.service.addToCart(new CartItem(product, Number(qty)));
  }
}
