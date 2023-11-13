import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  
  user:User | undefined = this.authService.getCurrentUser();
  
  constructor(
    private authService:AuthService,
  ){}

  ngOnInit(): void {
    console.log("User: ", this.user);
  }
}
