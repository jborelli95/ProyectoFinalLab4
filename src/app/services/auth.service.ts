import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environments } from 'src/environments/environments';
import { UserService } from './user.service';
import { User } from '../interfaces/interfaces';
import { Observable, catchError, flatMap, map, of, retry, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlUsers: string = environments.baseUrl.concat("/users");
  //**atributo de este objeto donde vmaos a guardar el usuario logeado */
  private userObj?: User;

  constructor(
    private http: HttpClient,
    private router: Router,
    private userService: UserService
  ) { }

  getCurrentUser(): User | undefined {
    if (!this.userObj) {
      return undefined;
    } else {
      /**Clonamos el dato, la idea es que siempre manejemos una copia del usuario */
      return { ...this.userObj }
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
            alert("Usuario logeado correctamente...");
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
      const token = localStorage.getItem("token");
      console.log("token: ", token);
      if (!token) {
        return of(false);
      } else {
        return this.http.get<User>(this.urlUsers.concat(`/${token}`)).pipe(
          tap(u => this.userObj = u),
          map(u => !!u),
          catchError(err => of(false))
        )
      }
  }

  logOut(){
    this.userObj = undefined;
    localStorage.clear();
  }

}


