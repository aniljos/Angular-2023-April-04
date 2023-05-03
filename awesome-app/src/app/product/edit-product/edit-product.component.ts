import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/Product';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  public productId!: number;
  public product: Product|null = null;
  
  @ViewChild("myForm")
  public ngForm!:NgForm;

  constructor(private activatedRoute: ActivatedRoute, 
            private router: Router, private httpClient: HttpClient){

    //this.productId = activatedRoute.snapshot.params["id"];
    
    activatedRoute.params.subscribe({
      next: (value) => {
        this.productId = value["id"];
      }
    })


    //console.log(this.router.getCurrentNavigation()?.extras.state);
    
        this.httpClient
              .get<Product>("http://localhost:9000/products/" + this.productId)
              .subscribe({
                next: (result) => {
                  this.product = result;
                },
                error: () => {
                  alert("Failed to fetch");
                }
              })  
  }

  save(){
    console.log("ngForm", this.ngForm);
  }

  cancel(){
    
  }

}
