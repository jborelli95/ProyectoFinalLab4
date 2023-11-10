import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/interfaces';
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
    private userService:UserService  
  ){

  }
/*
  iniciarSesion(){
    console.log("El ususasrio que ingreso es: " +this.loginForm.controls["username"].value);
    console.log("La pw que ingreso es: " +this.loginForm.controls["password"].value);
    this.userService.getUsersHttp().subscribe({
      next: (usuarios)=>{
        if (usuarios.find((element) => (this.loginForm.controls["username"].value === element.username) && (this.loginForm.controls["password"].value === element.password))){
          alert("El usuario se encontró")
          this.loginUser.username = this.loginForm.controls["username"].value;
          this.loginUser.password = this.loginForm.controls["password"].value;
        }else{
          alert("Usuario o contraseña incorrecta")
        };
      },
      error: () => {
        console.log("Error al logear al usuario en Http get request!");
      }
    })
    
    setTimeout(()=>{
      console.log(this.loginUser);
    },500)
  }*/

  logIn(){
    this.validateUser();
  }

  validateUser(){
    let userObj;

    this.userService.getUsersHttp().subscribe({
      next: (usuarios) => {
        userObj = usuarios.find((user) => this.loginForm.controls["username"].value === user.username);
        if(userObj != undefined){
          if(userObj.password === this.loginForm.controls["password"].value){
            alert("Usuario logeado...")
          }else{
            alert("Contraseña incorrecta...")
          }
        }else{ 
          alert("Nombre de usuario inexistente...")
        }
      }
    })

    
  }
}
