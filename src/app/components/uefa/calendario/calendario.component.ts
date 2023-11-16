import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  data: any;
  ngOnInit() {
    this.mostrarFixture();
  }
  
  mostrarFixture(){
    this.apiService.getFixtures().subscribe(data => {
      this.data = data;
      console.log(data);
    });
  }


}
