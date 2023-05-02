import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginformGroup: FormGroup;
  userNameFormControl: FormControl;
  errorMessage: string = "";
  message:string = "";
  url: string;

  constructor(private httpClient: HttpClient, private router: Router){

    this.url = environment.baseUrl + "login";
    this.userNameFormControl = new FormControl("", [Validators.required], [])

    this.loginformGroup = new FormGroup({

      uname: this.userNameFormControl,
      pwd: new FormControl("", [Validators.required])

    });

  }

  login(){

      if(this.loginformGroup.valid){

        const userName = this.userNameFormControl.value;
        const password = this.loginformGroup.get('pwd')?.value;
        // var loginInput = {
        //     name: userName,
        //     password: password
        // };
        this.httpClient
                .post(this.url, {name: userName, password: password})
                .subscribe({
                  next: () => {

                    this.errorMessage = "";
                    this.message = "Valid Inputs";
                    this.router.navigate(["/products"]);
                  },
                  error: () => {
                      this.errorMessage = "Invalid Credentials";
                      this.message = ""
                  }
                })


        


        
      }
      else{
        this.errorMessage = "Invalid Inputs";
        this.message = "";
      }
      

  }
}
