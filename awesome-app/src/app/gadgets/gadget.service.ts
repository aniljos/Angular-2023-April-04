import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, ReplaySubject, Subject, firstValueFrom } from 'rxjs';
import { Product } from '../model/Product';
import { CartItem } from '../model/CartItem';

// @Injectable({
//   providedIn: 'root'
// })

@Injectable()
export class GadgetService {

  private url: string;
  private cart: Array<CartItem> = [];
  //public cartSubject: Subject<Array<CartItem>> = new Subject<Array<CartItem>>();
  public cartSubject: ReplaySubject<Array<CartItem>> = new ReplaySubject<Array<CartItem>>();

  constructor(private httpClient: HttpClient) {

    this.url = environment.productsUrl;
  }

  // this makes an async call
  // getProducts itself will have to be async
  getProducts(): Observable<Array<Product>> {

      // this.httpClient.get(this.url).subscribe({
      //   next: (products)=> {
      //     console.log("products", products);
      //       return products;
      //   }
      // })

      return this.httpClient.get<Array<Product>>(this.url);

  }

  getProductsWithCallback(success: (data?: Array<Product>)=> void, error: (err?: any) => void): void{

    this.httpClient.get<Array<Product>>(this.url).subscribe({
      next: (data) => {
          success(data);
      },
      error: (err) => {

        error(err);
      }
    })

  }

  getProductsWithPromise():Promise<Array<Product>>{

    return firstValueFrom(this.httpClient.get<Array<Product>>(this.url));
  }

  addToCart(item: CartItem){
    this.cart.push(item);

    //publish
    this.cartSubject.next([...this.cart]);
  }

  getCart(): Array<CartItem>{

    // return a copy(deep) of the cart
    //ES6 spread operator
    return [...this.cart];

  }


}
