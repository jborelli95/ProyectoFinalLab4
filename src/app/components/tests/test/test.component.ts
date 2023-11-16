import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{  

  form!:FormGroup;
  user:User | undefined = this.authService.getCurrentUser();
  dataFromApi!:any;

  constructor(
    private fB:FormBuilder,
    private authService:AuthService,
    private apiService:ApiService){
    
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

  loadData(){
    this.apiService.getTeamStaticsById(50).subscribe({
      next:(data) => {
        
        this.dataFromApi = data;
        console.log(this.dataFromApi);
      },
      error:() => {
        console.log("Error en la peticion custom de la api");
      }
    })
  }

  mostrarData(){
    console.log(this.dataFromApi);
  }

  sumarYellowCards(){
    
  }
}
