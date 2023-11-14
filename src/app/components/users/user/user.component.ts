import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Countrie, User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { countries } from '../../store/country-data-store';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User | undefined = this.authService.getCurrentUser();
  verPerfil: boolean = false;
  editPerfil:boolean = false;
  countriesList: Countrie[] = countries;

  editForm:FormGroup = this.formBuilder.group({
    username: [this.user?.username, Validators.required],
    password: [this.user?.password, Validators.required],
    firstName: [this.user?.firstName, Validators.required],
    lastName: [this.user?.lastName, Validators.required],
    email: [this.user?.email, Validators.required],
    city: this.user?.city,
    state: this.user?.state,
    country: this.user?.country,
    startedDate: this.user?.startedDate,
    favoriteTeam: this.user?.favoriteTeam,
    rol: this.user?.rol,
    id: this.user?.id,
  })

  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private router:Router
  ) { }

  ngOnInit(): void {
    
  }

  setVerPerfil(){
    if(this.verPerfil){
      this.verPerfil = false;
      return
    }else{
      this.verPerfil = true;
      return
    }
  }

  setEditarPerfil(){
    if(this.editPerfil){
      this.editPerfil = false;
      return
    }else{
      this.editPerfil = true;
      return
    }
  }

  editarUsuarioHttp(){
    if(this.editForm.invalid){
      return
    }

    const u:User = {
      username: this.editForm.controls["username"].value,
      password: this.editForm.controls["password"].value,
      firstName: this.editForm.controls["firstName"].value,
      lastName: this.editForm.controls["lastName"].value,
      email: this.editForm.controls["email"].value,
      city: this.editForm.controls["city"].value,
      state: this.editForm.controls["state"].value,
      country: this.editForm.controls["country"].value,
      startedDate: this.editForm.controls["startedDate"].value,
      favoriteTeam: this.editForm.controls["favoriteTeam"].value,
      rol: this.editForm.controls["rol"].value,
      id: this.editForm.controls["id"].value,
    }

    this.userService.putUserHttp(u).subscribe({
      next: () => {
        this.editPerfil = false;
        return
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
