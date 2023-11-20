import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-user-list-page',
  templateUrl: './user-list-page.component.html',
  styleUrls: ['./user-list-page.component.css']
})
export class UserListPageComponent {
  constructor(
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) { }
  
  ngOnInit() {
    
    this.renderer.setStyle(this.document.body, 'background-color', 'rgb(212, 212, 230)');
    this.renderer.setStyle(this.document.body, 'background-image', 'none'); 
    this.renderer.setStyle(this.document.body, 'background-size', 'cover');
  }
}
