import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import {filter, map, debounceTime, take, tap} from 'rxjs/operators';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public formGroup!: FormGroup;
  public results: Array<string> = [];

  constructor(private httpClient: HttpClient){
       
        //Generates the input
        var obs = interval(1000)
          .pipe(
            take(15),
            tap(value => console.log("tap: ", value)),
            filter(value => value % 2 === 0),
            map(x => x * x)

          );

          // obs.subscribe((value) => {
          //   //This is the output
          //   console.log("In subscribe #1: ", value);
          // });
          // obs.subscribe((value) => {
          //   //This is the output
          //   console.log("In subscribe #2: ", value);
          // });
  }

  ngOnInit(): void {
    
    this.formGroup = new FormGroup({
      search: new FormControl()
    });

    this.formGroup
              .get('search')?.valueChanges
              .pipe(
                debounceTime(1000)
              )
              .subscribe(value => {
                console.log(value);
                //API call
                const url = "https://en.wikipedia.org/w/api.php";
                const queryParams = new HttpParams()
                                        .set("action", "opensearch")
                                        .set("origin", "*")
                                        .set("limit", "20")
                                        .set("search", value);

                // this.httpClient
                //       .get(url, {params: queryParams})
                //       .subscribe({
                //         next: (data) => {
                //             console.log("data", data);
                //         }
                // });

                //observe: 'response' or 'body'(default)
                // this.httpClient
                //       .get(url, {params: queryParams, observe: 'response'})
                //       .subscribe({
                //         next: (response) => {
                //             console.log("response", response);
                //         }
                // });

                this.httpClient
                      .get<any>(url, {params: queryParams})
                      .pipe(
                        map(data => data[1])
                      )
                      .subscribe({
                        next: (data) => {
                            console.log("data", data);
                            this.results = data;
                        }
                });



          });

  }



}
