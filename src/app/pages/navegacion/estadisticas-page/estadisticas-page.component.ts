import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-estadisticas-page',
  templateUrl: './estadisticas-page.component.html',
  styleUrls: ['./estadisticas-page.component.css']
})
export class EstadisticasPageComponent implements OnInit{
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
