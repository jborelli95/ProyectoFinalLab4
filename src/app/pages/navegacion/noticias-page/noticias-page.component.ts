import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-noticias-page',
  templateUrl: './noticias-page.component.html',
  styleUrls: ['./noticias-page.component.css']
})
export class NoticiasPageComponent {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }
  
  ngOnInit() {
    // Establecer el fondo como blanco
    this.renderer.setStyle(this.document.body, 'background-color', 'white');
    this.renderer.setStyle(this.document.body, 'background-image', 'none'); // Asegurarse de que no haya una imagen de fondo
    this.renderer.setStyle(this.document.body, 'background-size', 'cover');
    this.renderer.setStyle(this.document.body, 'background-repeat', 'no-repeat');
  }
}
