import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginformGroup: FormGroup;
  userNameFormControl: FormControl;
  errorMessage: string = "";
  message:string = ""

  constructor(){

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
        console.log("UserName, Password", userName,password);
        this.errorMessage = "";
        this.message = "Valid Inputs"
        
      }
      else{
        this.errorMessage = "Invalid Inputs";
        this.message = "";
      }
      

  }
}
