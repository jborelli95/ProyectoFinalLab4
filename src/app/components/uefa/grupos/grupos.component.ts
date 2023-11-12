import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  data: any;
  ngOnInit() {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getStandings().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }

  }
