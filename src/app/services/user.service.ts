import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUsers: string = environments.baseUrl.concat("/users");

  constructor(private router: Router,
    private http: HttpClient) { }

  /**Vamos con el CRUD de Usuarios... Create, Read, Update, Delete */
  /**Dejamos las funciones fetch previamente programadas y empezamos con observables */

  //**Post con fetch */
  async postUser(user: User) {
    try {
      await fetch(this.urlUsers, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-type": "application/json"
        }
      })

      this.router.navigate(["home"]);

    } catch (err) {
      console.log(err);
    }
  }

  /**Post con request http angular y observables */
  postUserHttp(user: User): Observable<User> {
    return this.http.post<User>(
      this.urlUsers,
      user,
      { headers: { "Content-type": "application/json" } }
    );
  }

  /**Get de UserS con fetch */
  async getUsers(): Promise<User[] | undefined> {
    try {
      const resultado = await fetch(this.urlUsers, {
        method: "GET"
      });

      const usuarios = await resultado.json();

      return usuarios;
    } catch (err) {
      console.log(err);
    }

    return undefined;
  }

  /**Get de User con fetch */
  async getUser(id: number): Promise<User | undefined> {
    try {
      const resultado = await fetch(this.urlUsers.concat(`/${id}`), {
        method: "GET"
      });

      const dato = await resultado.json();

      return dato;
    } catch (err) {
      console.log(err);
    }

    return undefined;
  }

  /**Get de UserS con hhtp request de angular y observables */
  getUsersHttp(): Observable<User[]> {
    return this.http.get<User[]>(this.urlUsers)
      .pipe(
        catchError((error: any) => {
          console.log("Ha ocurrido un error en la solicitud HTTP!: " + error);
          return throwError(() => error);
        })
      )
  }

  /**Get un usario en concreto conh observables... */
  getUserHttp(id: number): Observable<User> {
    return this.http.get<User>(this.urlUsers.concat(`/${id}`))
      .pipe(
        catchError((error: any) => {
          console.log("Ha ocurrido un error en la solicitud HTTP de un usario!: " + error);
          return throwError(() => error);
        })
      )
  }

  /**Delete usuario con observable y Http request de angular */
  deleteUserHttp(id: number): Observable<User> {
    return this.http.delete<User>(this.urlUsers.concat(`/${id}`))
      .pipe(
        catchError((error: any) => {
          console.log("Ha ocurrido un error en la solicitud HTTP de eliminar al usuario con la id: " + id + "!");
          return throwError(() => error);
        })
      )
  }

  /**Put de Usuario Http */
  putUserHttp(user:User): Observable<User>{
    return this.http.put<User>(
      this.urlUsers.concat(`/${user.id}`),
      user,
      {headers: { "Content-type":"application/json" }}
    )
  }

}
