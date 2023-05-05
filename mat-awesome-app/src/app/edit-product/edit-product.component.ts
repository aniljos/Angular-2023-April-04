import { Component } from '@angular/core';
import {Location} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../list-products/list-products-datasource';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MessageDialogComponent } from '../message-dialog/message-dialog.component';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {

  public product!: Product| any;
  constructor(private router: Router, private location: Location, private httpClient: HttpClient, private dialog: MatDialog){

    
      const result = router.getCurrentNavigation()?.extras?.state;
      console.log(result);
      this.product = result;
    
  }

  save(){

      this.httpClient.put("http://localhost:9000/products/" + this.product.id, this.product)
          .subscribe({
            next: () => {

              const dialogRef = this.dialog.open(MessageDialogComponent, 
                  {data: {content: "The record has been updated"}, width: "50%"});
              dialogRef.afterClosed().subscribe(() => {
                this.location.back();
              })
            },
            error: () => {
              const dialogRef = this.dialog.open(MessageDialogComponent, {data: {content: "Failed to update the record"}});
            }
          });

      
  }

  cancel(){
    this.location.back();
  }
}
