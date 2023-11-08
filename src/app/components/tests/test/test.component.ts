import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit{  

  form!:FormGroup;

  constructor(private fB:FormBuilder){
    
  }

  ngOnInit(): void {
    this.form = this.fB.group({
      nombre: ["", Validators.required],
      apellido: ["", Validators.required],
      cb: [false, Validators.requiredTrue]
    })
  }

  formSubmit(){

  }
}
