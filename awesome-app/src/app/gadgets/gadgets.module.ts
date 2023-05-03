import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {Routes, RouterModule} from '@angular/router';
import { StoreComponent } from './store/store.component';
import { ViewCartComponent } from './view-cart/view-cart.component';

const routes: Routes = [
  {path: "gadgets", component: MainComponent, children: [
    {path: "store", component: StoreComponent},
    {path: "cart", component: ViewCartComponent}
  ]}
]

@NgModule({
  declarations: [
    MainComponent,
    StoreComponent,
    ViewCartComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class GadgetsModule { }
