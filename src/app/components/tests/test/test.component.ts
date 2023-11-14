import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';
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
    private authService:AuthService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document){
    
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.document.body, 'background-image', 'url("../../../assets/images/ucl-image-ultimatestage-gallery-01.jpg")');
    this.renderer.setStyle(this.document.body, 'background-size', 'cover');
    this.renderer.setStyle(this.document.body, 'background-repeat', 'no-repeat');
    
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
