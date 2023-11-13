import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{  

  form!:FormGroup;
  user:User | undefined = this.authService.getCurrentUser();

  constructor(
    private fB:FormBuilder,
    private authService:AuthService){
    
  }

  ngOnInit(): void {
    this.form = this.fB.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      cb: [false, Validators.requiredTrue]
    })

    console.log("User: ", this.user);
  }

  formSubmit(){

  }
}
