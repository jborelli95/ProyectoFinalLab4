import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {

  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }
  
  ngOnInit() {
    this.renderer.setStyle(this.document.body, 'background-image', 'url("../../../assets/images/6911192.jpg")');
    this.renderer.setStyle(this.document.body, 'background-size', 'cover');
    this.renderer.setStyle(this.document.body, 'background-repeat', 'no-repeat');
  }
}
