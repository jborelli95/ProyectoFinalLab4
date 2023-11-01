import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/interfaces/interfaces';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  form:FormGroup = this.fb.group({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    state: "",
    country: "",
    startedDate: "",
    favoriteTeam:0,
    id:0
  })

  ngOnInit(): void {
    
  }

  constructor(
    private fb:FormBuilder,
    private userService:UserService){}

  registrarUsuario(u:User){}
}
