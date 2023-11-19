import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent {

  user:User | undefined = this.authService.getCurrentUser();
  dataFromApi!:any;
  dataFromApiSquad!:any;
  TeamId!:number;
  favoriteTeam: boolean = false;

  constructor(
    private authService:AuthService,
    private apiService:ApiService,
    private router:ActivatedRoute,
    private userService: UserService,
    private router2: Router){}
 
  ngOnInit(): void {
    this.router.params.subscribe(param => {
      this.TeamId = +param["id"];
      this.loadData();
      this.loadDataSquad();
      console.log("User logeado: ", this.user);
    })
  }

  loadData() {
    this.apiService.getTeamStaticsById(this.TeamId).subscribe({
      next: (data) => {

        this.dataFromApi = data;
        console.log(this.dataFromApi);
      },
      error: () => {
        console.log("Error en la peticion custom de la api");
      }
    })
  }

  loadDataSquad() {
    this.apiService.getSquads(this.TeamId).subscribe({
      next: (data) => {
        this.dataFromApiSquad = data;
        console.log(this.dataFromApiSquad);
      },
      error: () => {
        console.log("Error en la peticion custom de la api");
      }
    })
  }
  mostrarData() {
    console.log(this.dataFromApi);
  }

  sumarTarjetasAmarillas(): number {
    let sum = 0;
    if (this.dataFromApi.response.cards.yellow["0-15"].total !== null) {
      sum += this.dataFromApi.response.cards.yellow["0-15"].total;
    };
    for (let i = 15; i < 120; i += 15) {
      if (this.dataFromApi.response.cards.yellow[`${i + 1}-${i + 15}`].total !== null) {
        sum += this.dataFromApi.response.cards.yellow[`${i + 1}-${i + 15}`].total;
      }
    }

    return sum;
  }

  sumarTarjetasRojas(): number {
    let sum = 0;
    if (this.dataFromApi.response.cards.red["0-15"].total !== null) {
      sum += this.dataFromApi.response.cards.red["0-15"].total;
    }

    for (let i = 15; i < 120; i += 15) {
      if (this.dataFromApi.response.cards.red[`${i + 1}-${i + 15}`].total !== null) {
        sum += this.dataFromApi.response.cards.red[`${i + 1}-${i + 15}`].total;
      }
    }

    return sum;
  }
  setFavoriteTeam() {
    if (this.user != undefined) {
      if (this.user.favoriteTeam !== this.TeamId) {
        this.user.favoriteTeam = this.TeamId;

        this.userService.putUserHttp(this.user).subscribe({
          next: () => {
            alert("Favorito agregado correctamente...");
          }
        })

        return;
      }

      this.user.favoriteTeam = 0;
      this.userService.putUserHttp(this.user).subscribe({
        next: () => {
          alert("Se elimino el equipo de favoritos...");
        }
      })
      return;
    }
  }
}


