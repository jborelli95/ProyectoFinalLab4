import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent {
  user:User | undefined = this.authService.getCurrentUser();
  dataFromApi!:any;
  TeamId!:number;

  constructor(
    private authService:AuthService,
    private apiService:ApiService,
    private router:ActivatedRoute){
    
  }

  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.TeamId = +param["id"];
<<<<<<< Updated upstream
      //this.loadData();
=======
      this.loadData();
      //this.loadDataSquad();
      console.log("User logeado: ", this.user);
>>>>>>> Stashed changes
    })

    this.test();
  }

  loadData(){
    this.apiService.getTeamStaticsById(this.TeamId).subscribe({
      next:(data) => {
        
        this.dataFromApi = data;
        console.log(this.dataFromApi);
      },
      error:() => {
        console.log("Error en la peticion custom de la api");
      }
    })
  }
  loadDataSquad() {
    this.apiService.getSquads(this.TeamId).subscribe({
      next: (data) => {
        this.dataFromApi = data;
        console.log(this.dataFromApi);
      },
      error: () => {
        console.log("Error en la peticion custom de la api");
      }
    })
  }


  mostrarData(){
    console.log(this.dataFromApi);
  }

  sumarTarjetasAmarillas(): number{
    let sum = 0;
    if(this.dataFromApi.response.cards.yellow["0-15"].total !== null){
      sum += this.dataFromApi.response.cards.yellow["0-15"].total;
    }
    console.log(`index:[0-15]`);

    for (let i = 15; i < 120; i+= 15) {
      console.log(`index:[${i+1}-${i+15}]`);
      if(this.dataFromApi.response.cards.yellow[`${i+1}-${i+15}`].total !== null){
        console.log(`Entro  en [${i+1}-${i+15}]`);
        sum += this.dataFromApi.response.cards.yellow[`${i+1}-${i+15}`].total;
      }
    }
    
    return sum;
  }

  sumarTarjetasRojas(): number{
    let sum = 0;
    if(this.dataFromApi.response.cards.red["0-15"].total !== null){
      sum += this.dataFromApi.response.cards.red["0-15"].total;
    }

    for (let i = 15; i < 120; i+= 15) {
      if(this.dataFromApi.response.cards.red[`${i+1}-${i+15}`].total !== null){
        sum += this.dataFromApi.response.cards.red[`${i+1}-${i+15}`].total;
      }
    }
    
    return sum;
  }

  test(){
    this.apiService.getTeamsUEFA().subscribe({
      next:(teams)=>{
        console.log(teams);
      },
      error:()=>{
        console.log("Error get teams api UEFA");
      }
    })
  }
}
