import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environments } from 'src/environments/environments';
import { UserService } from './user.service';
import { User } from '../interfaces/interfaces';
import { Observable, flatMap, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private urlUser:string = environments.baseUrl.concat("/users");
  //**atributo de este objeto donde vmaos a guardar el usuario logeado */
  private userObj?: User;

  constructor(
    //private http:HttpClient,
    private router: Router,
    private userService: UserService
  ) { }

  getCurrentUser(): User | undefined {
    if (this.userObj != undefined) {
      /**Clonamos el dato, la idea es que siempre manjemos una copia del usuario */
      return structuredClone(this.userObj);
    } else {
      return undefined;
    }
  }

  validateUser(username: string, password: string) {
    this.userService.getUsersHttp().subscribe({
      next: (usuarios) => {
        let user = usuarios.find((u) => username === u.username);
        if (user != undefined) {
          if (user.password === password) {
            this.userObj = user;
            localStorage.setItem("token", user.id.toString());
            this.router.navigate(["home"]);
            alert("Usuario logeado...");
          } else {
            alert("Contraseña incorrecta...")
          }
        } else {
          alert("Nombre de usuario inexistente...")
        }
      }
    })
  }

  checkStatusAuthentication(): Observable<boolean> {
    try {
      const token = localStorage.getItem("token");
      if (token) {
        this.userService.getUserHttp(Number(token)).subscribe({
          next: (user) => {
            this.userObj = user;
            return true;
          },
          error: () => {
            console.log("Error en el observador getUserhhtp authService!");
          }
        })
      } else {
        return of(false);
      }
    } catch (err) {
      console.log(err);
    }
    throw ("Error checkStatusAuthentication en AuthService!");
  }
}


