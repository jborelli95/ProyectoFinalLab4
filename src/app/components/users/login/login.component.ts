import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginUser:any = {
    username: "",
    password: ""
  }

  loginForm:FormGroup = this.formBuilder.group({
    username:["",  Validators.required],
    password:["", Validators.required]
  })

  constructor(
    private formBuilder:FormBuilder,
    private authService:AuthService  
  ){

  }

  logIn(){
    this.authService.validateUser(this.loginForm.controls["username"].value, this.loginForm.controls["password"].value);
  }


}
