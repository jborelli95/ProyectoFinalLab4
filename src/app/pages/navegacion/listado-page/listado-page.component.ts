import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-listado-page',
  templateUrl: './listado-page.component.html',
  styleUrls: ['./listado-page.component.css']
})
export class ListadoPageComponent {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ){}
  ngOnInit(): void {
    this.renderer.setStyle(this.document.body, 'background-color', 'rgb(212, 212, 230)');
    this.renderer.setStyle(this.document.body, 'background-image', 'none');
  }
}
