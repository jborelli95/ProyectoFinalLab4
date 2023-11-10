import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environments } from 'src/environments/environments';
import { UserService } from './user.service';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlUser:string = environments.baseUrl.concat("/users");
  private userObj!:User;

  constructor(
    private http:HttpClient,
    private router:Router,
    private userService:UserService
  ) { }

  getCurrentUser(): User | undefined{
    if(this.userObj != undefined){
      /**Clonamos el dato, la idea es que siempre manjemos una copia del usuario */
      return { ...this.userObj};
    }else{
      return undefined;
    }
  }

  validateUser(username:string, password:string){
    this.userService.getUsersHttp().subscribe({
      next:(users) => {
        users.find(user => {
          if(user.username === username){
            if(user.password === password){
              this.userObj = user;
              localStorage.setItem("token", user.id.toString());
              this.router.navigate(["home"])
            }else{
              alert("Contraseña incorrecta...")
            }
          }else{
            alert("Nombre de usuario inexistente...")
          }
        })
      }
    })

  }
  
  
}
