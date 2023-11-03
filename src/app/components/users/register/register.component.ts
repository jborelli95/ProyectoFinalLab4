import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Countrie, User } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';
import { countries } from '../../store/country-data-store';

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
  users:User[] | undefined = []

  /**Variable para la fecha de hoy, es para testear */
  localDate:string = new Date().toLocaleDateString();

  ngOnInit(): void {

  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService) {}

  /**Funcion que registra a un usario */
  registrarUsuario() {
    if(this.form.invalid){
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

  /**Funcion que obtiene los usuarios, no sirve acá*/
  /**Acordate que es asincrono y que estas manejando una ppromesa, suar async y awwit */
  async mostrarUsuarios(){
    this.users = await this.userService.getUsers();
    console.log(this.users);
  }
}
