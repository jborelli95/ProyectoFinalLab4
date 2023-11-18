import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countrie, User } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';
import { countries } from '../../store/country-data-store';
import { Router } from '@angular/router';

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
    username: ["", Validators.required],
    password: ["", Validators.required],
    password2:["", Validators.required],
    firstName: ["", Validators.required],
    lastName: ["", Validators.required],
    email: ["", Validators.required],
    city: "",
    state: "",
    country: "",
    startedDate: "",
    favoriteTeam: 0,
    rol: 0,
    id: 0
  })

  submitted:boolean = false;
  unmatchPw:boolean = false;
  nameRepited:boolean = false;
  users:User [] | undefined;

  ngOnInit(): void {
    
  }

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  /**Funcion post usuario Observable */
  registrarUsuarioHttp() {
    this.submitted = true;

    if (this.form.invalid) {
      return
    }
    
    if(this.form.controls['password'].value !== this.form.controls['password2'].value){
      this.unmatchPw = true;
      return
    }

    this.userService.getUsersHttp().subscribe({
      next: (usuarios) => {
        this.users = usuarios;
      },
      error: () => {
        console.log("Error al traer los usuarios");
      }
    })

    setTimeout(()=>{
      if(this.users?.find((u) => u.username === this.form.controls['username'].value) !== undefined){
        this.nameRepited = true;
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
        rol: 1,
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
  
      alert("Usuario registrado...");
    },500)

  }


  test(){
    this.submitted = true;
    console.log("hola");
  }

}
