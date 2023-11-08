import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
    username:"",
    password:""
  })

  constructor(
    private formBuilder:FormBuilder,
    private userService:UserService  
  ){

  }

  iniciarSesion(){
    console.log("El ususasrio que ingreso es: " +this.loginForm.controls["username"].value);
    console.log("La pw que ingreso es: " +this.loginForm.controls["password"].value);
    this.userService.getUsersHttp().subscribe({
      next: (usuarios)=>{
        if (usuarios.find((element) => (this.loginForm.controls["username"].value === element.username) && (this.loginForm.controls["password"].value === element.password))){
          alert("El usuario se encontró")
          this.loginUser.username = this.loginForm.controls["username"].value;
          this.loginUser.password = this.loginForm.controls["password"].value;
          console.log(this.loginUser);

        }else{
          alert("El usuario no existe")
        };
      },
      error: () => {
        console.log("Error al logear al usuario!");
      }
    })
    

  }
}
