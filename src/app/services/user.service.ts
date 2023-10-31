import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlUsers: string = "http://localhost:4000/users";
  constructor(private router: Router) { }

  /**Vamos con el CRUD de Usuarios... Create, Read, Update, Delete */

  async postCliente(user: User) {
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
}
