import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {Routes, RouterModule} from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

import { HttpClientModule } from '@angular/common/http';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormsModule } from '@angular/forms';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MessageDialogComponent } from './message-dialog/message-dialog.component';

const routes: Routes = [
  {path: "products", component: ListProductsComponent },
  {path: "products/:id", component: EditProductComponent }
  
]


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ListProductsComponent,
    EditProductComponent,
    ConfirmDialogComponent,
    MessageDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule, 
    HttpClientModule,
    RouterModule.forRoot(routes), 
    MatTableModule, 
    MatPaginatorModule, 
    MatSortModule,
    MatInputModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
