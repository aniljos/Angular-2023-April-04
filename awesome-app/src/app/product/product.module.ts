import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';

import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AuthGuardService } from '../auth-guard.service';
import { AuthGuardFn } from '../auth-guard-fn';
import { ViewProductComponent } from './view-product/view-product.component';

const routes: Routes = [
  {path: "products", component: ListProductsComponent},
  {path: "products/:id", component: EditProductComponent, canActivate: [AuthGuardFn]}
]

@NgModule({
  declarations: [
    ListProductsComponent,
    EditProductComponent,
    ViewProductComponent
  ],
  imports: [
    CommonModule, HttpClientModule, FormsModule, RouterModule.forChild(routes)
  ],
  exports: [ListProductsComponent]
})
export class ProductModule { }
