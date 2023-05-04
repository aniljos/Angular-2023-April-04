import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HelloComponent} from './hello/hello.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductModule } from './product/product.module';
import {Routes, RouterModule} from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchComponent } from './search/search.component';
import { UserService } from './user.service';
import { TokenService } from './token.service';
//import { GadgetsModule } from './gadgets/gadgets.module'; ==> static import
import { AuthGuardFn } from './auth-guard-fn';

//  () => import('./gadgets/gadgets.module').then(m => m.GadgetsModule)}, ==> dynamic import
const routes: Routes = [
 
  {path: "home", component: HelloComponent},
  {path: "databinding", component: DataBindingComponent},
  {path: "login", component: LoginComponent},
  {path: "search", component: SearchComponent, canActivate: [AuthGuardFn]},
  {path: "gadgets", loadChildren: () => import('./gadgets/gadgets.module').then(m => m.GadgetsModule)},
  {path: "", redirectTo: "/home", pathMatch:"full"},
  {path: "**", component: NotFoundComponent}
  
]

@NgModule({
  declarations: [
    AppComponent, HelloComponent, DataBindingComponent, NotFoundComponent, LoginComponent, SearchComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule,
    ProductModule, 
    RouterModule.forRoot(routes), 
    ReactiveFormsModule,
    HttpClientModule,
    //GadgetsModule
  ],
  providers: [{provide: UserService, useClass: TokenService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
