import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  constructor(
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }
  
  ngOnInit() {
    this.renderer.setStyle(this.document.body, 'background-image', 'url("../../../assets/images/ucl-image-ultimatestage-gallery-01.jpg")');
    this.renderer.setStyle(this.document.body, 'background-size', 'cover');
    this.renderer.setStyle(this.document.body, 'background-repeat', 'no-repeat');
  }
}
