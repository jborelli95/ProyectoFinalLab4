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

  async getUsers(): Promise<User[] | undefined>{
    try{
      const resultado = await fetch(this.urlUsers, {
        method:"GET"
      });
  
      const usuarios = await resultado.json();
  
      return usuarios;
    }catch(err){
      console.log(err);
    }

    return undefined;
  }

  async getUser(id:number): Promise<User | undefined>{
    try{
      const resultado = await fetch(this.urlUsers.concat(`/${id}`), {
        method:"GET"
      });

      const dato = await resultado.json();

      return dato;
    }catch(err){
      console.log(err);
    }

    return undefined;
  }
}
