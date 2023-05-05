import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListProductsDataSource, Product } from './list-products-datasource';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-list-products-ds',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent{

  public dataSource!: MatTableDataSource<Array<any>>;
  //public dataSource!: ListProductsDataSource;
  public products: Array<any> = [];
  public columns: Array<string> = [];
  @ViewChild(MatSort)
  public sort!: MatSort;

  @ViewChild(MatPaginator)
  public paginator!: MatPaginator;
  private url: string;

  constructor(private httpClient: HttpClient, private router: Router, private dialog: MatDialog){

    this.url = "http://localhost:9000/products"
    this.fetchProducts();
    this.columns = ["id", "name", "description", "price", "actions"];

  }
  fetchProducts(){

    this.httpClient.get<Array<any>>(this.url).subscribe({
      next: (data) => {

        this.products = data;
        this.dataSource = new MatTableDataSource(this.products); //new ListProductsDataSource(this.products);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
    });
  }

  edit(product: Product){
    this.router.navigate(["/products", product.id], {state: product});
  }

  delete(product: Product){
    
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {data: {title: `Delete Product`, content: `Deleting product ${product.name}. Confirm?`}});
    dialogRef.componentInstance.confirmed.subscribe(() => {
      //alert("confirmed deletion");
      this.httpClient.delete(this.url + "/" + product.id).subscribe(() => {
          this.fetchProducts();
      })
    });

    dialogRef.componentInstance.cancelled.subscribe(() => {
      //alert("cancelled deletion");
    });
  }
}
