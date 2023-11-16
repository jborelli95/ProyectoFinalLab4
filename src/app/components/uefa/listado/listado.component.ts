import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit{
  user:User | undefined = this.authService.getCurrentUser();
  dataFromApi!:any;

  constructor(
    private authService:AuthService,
    private apiService:ApiService,
    //private router:Router
    ){}

  ngOnInit(): void {
    //this.loadData();
  }

  loadData(){
    this.apiService.getTeamsUEFA().subscribe({
      next:(data) => {
        this.dataFromApi = data.response;
        //console.log(this.dataFromApi);
      },
      error:() => {
        console.log("Error al cargar los equipos de la UEFA...");
      }
    })
  }

  test(){
    console.log("Dta form api: ", this.dataFromApi);
    console.log("index 0: ", this.dataFromApi[0]);
    console.log("Nmae del index 0", this.dataFromApi[0].team.name);
  }
}
