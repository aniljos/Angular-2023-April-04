import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListProductsComponent } from './list-products/list-products.component';

import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    ListProductsComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ],
  exports: [ListProductsComponent]
})
export class ProductModule { }
