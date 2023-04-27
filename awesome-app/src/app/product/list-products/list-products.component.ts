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
  public newProduct: Product = new Product();
  private url: string;

  //Dependency injection of httpClinet(HttpClientModule is 
  //imported in the Products Module)
  constructor(private httpClient: HttpClient) {

    this.url = "http://localhost:9000/products";
    this.fetchProducts();

  }


  fetchProducts() {
    // Response ==> status code
    // Status code ==> 100, 200, 300 --> success
    // Status code ==> 400, 500 -> error
    this.httpClient.get<Array<Product>>(this.url)
      // .subscribe((result) => {
      //   console.log("result ", result);
      //   this.products = result;

      // }, (error) => {
      //   console.log("error ", error);
      // });
      .subscribe({
        next: (result) => {
          console.log("result ", result, this);
          this.products = result;
        },
        error: (error) => {
          console.log("error ", error);
        },
        complete: () => { }
      })

  }

  saveProduct() {

    //save to the backend
    this.httpClient.post(this.url, this.newProduct)
          .subscribe({

            next: () => {
              // update the products array
                //this.products.push(this.newProduct);
                this.fetchProducts()
                this.newProduct = new Product();
            },
            error: () => {
                alert("Error Saving the product");
            }
          })


    

  }

  deleteProduct(product: Product){

    this.httpClient
        .delete(this.url + "/" + product.id)
        .subscribe({
          next: () => {
            this.fetchProducts();
            alert("delete success");
          },
          error: () => {
            alert("delete failed");
          }
        })
  }

  editProduct(product: Product){

  }
}
