import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
 
  {path: "home", component: HelloComponent},
  {path: "databinding", component: DataBindingComponent},
  {path: "", redirectTo: "/home", pathMatch:"full"},
  {path: "**", component: NotFoundComponent}
  
]

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, NotFoundComponent
  ],
  imports: [
    BrowserModule, FormsModule,ProductModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
