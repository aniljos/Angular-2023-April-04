import { Component } from '@angular/core';
import { GadgetService } from '../gadget.service';
import { CartItem } from '../../model/CartItem'

@Component({
  selector: 'app-view-cart',
  templateUrl: './view-cart.component.html',
  styleUrls: ['./view-cart.component.css']
})
export class ViewCartComponent {

  public cart: Array<CartItem> = []
  constructor(private service: GadgetService){

    //this.cart = service.getCart();
    service.cartSubject.subscribe((cart) => {
      this.cart = cart;
    })

  }
}
