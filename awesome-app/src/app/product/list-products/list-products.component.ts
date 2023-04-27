import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from '../../model/Product';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent {

  public products: Array<Product> = new Array<Product>();

  //Dependency injection of httpClinet(HttpClientModule is 
  //imported in the Products Module)
  constructor(private httpClient: HttpClient){

    const url="http://localhost:9000/products";

    // Response ==> status code
    // Status code ==> 100, 200, 300 --> success
    // Status code ==> 400, 500 -> error
    this.httpClient.get<Array<Product>>(url)
          .subscribe((result) => {
            console.log("result ", result);
            this.products = result;

          }, (error) => {
            console.log("error ", error);
          });

    console.log("Invoke the Rest endpoint");

  }

}
