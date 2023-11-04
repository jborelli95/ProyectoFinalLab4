import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Countrie, User } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';
import { countries } from '../../store/country-data-store';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  /**Variable donde vmaos a guardar el array de paises unbicado en country-data-store */
  countriesList: Countrie[] = countries;

  /**Variabler formulario de grupo, donde vamso a grupar los distontos input desde el formulario html */
  form: FormGroup = this.fb.group({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    country: "",
    startedDate: "",
    favoriteTeam: 0,
    id: 0
  })

  /**Variable  donde vamso a usar el get */
  users: User[] | undefined = []

  /**Variable para la fecha de hoy, es para testear */
  localDate: string = new Date().toLocaleDateString();

  ngOnInit(): void {
    
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  /**Funcion que registra a un usario Fetch*/
  registrarUsuario() {
    if (this.form.invalid) {
      return
    }
    const u: User = {
      username: this.form.controls["username"].value,
      password: this.form.controls["password"].value,
      firstName: this.form.controls["firstName"].value,
      lastName: this.form.controls["lastName"].value,
      email: this.form.controls["email"].value,
      city: this.form.controls["city"].value,
      state: this.form.controls["state"].value,
      country: this.form.controls["country"].value,
      startedDate: new Date().toLocaleDateString(),
      favoriteTeam: 0,
      id: 0
    }

    this.userService.postUser(u);
  }


  /**Funcion post usuario Observable */
  registrarUsuarioHttp() {
    if (this.form.invalid) {
      return
    }
    const u: User = {
      username: this.form.controls["username"].value,
      password: this.form.controls["password"].value,
      firstName: this.form.controls["firstName"].value,
      lastName: this.form.controls["lastName"].value,
      email: this.form.controls["email"].value,
      city: this.form.controls["city"].value,
      state: this.form.controls["state"].value,
      country: this.form.controls["country"].value,
      startedDate: new Date().toLocaleDateString(),
      favoriteTeam: 0,
      id: 0
    }

    this.userService.postUserHttp(u)
      .subscribe({
        next: () => {
          this.router.navigate(["home"]);
        },

        error: (err) => {
          console.log("Error al intentar ingresar un usario!: " + err);
        }
      })
  }

  /**Todas las funciones por debajo de este comentario es para probar funcionalidad */

  /**Acordate que es asincrono y que estas manejando una ppromesa, suar async y awwit */
  async mostrarUsuarios() {
    this.users = await this.userService.getUsers();
    console.log(this.users);
  }

  /**Funcion para probasr getUsersHTTP */
  mostrasrUsuariosHttp() {
    this.userService.getUsersHttp().subscribe(
      {
        next: (user) => {
          this.users = user
          console.log(this.users);
        },

        error: (err) => {
          console.log(err);
        }
      }
    )

  }

  /**GET un solo user hhtp */
  mostrarUsuarioHttp(id: number) {
    this.userService.getUserHttp(id).subscribe(
      {
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log("TREMENDO ERROR!!");
        }
      }
    )
  }

  /**Delete suer hhtp */
  eliminarUsuarioHttp(id: number) {
    this.userService.deleteUserHttp(id).subscribe(
      {
        next: () => {
          alert(`El usuario ocn la id ${id} ha sido eliminado...`);
        },
        error: (err) => {
          console.log(err);
        }
      })
  }


}
