import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {path: "products", component: ListProductsComponent},
  {path: "products/:id", component: EditProductComponent}
]

@NgModule({
  declarations: [
    ListProductsComponent,
    EditProductComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: [ListProductsComponent]
})
export class ProductModule { }
