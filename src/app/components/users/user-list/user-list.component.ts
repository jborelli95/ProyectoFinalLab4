import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/interfaces/interfaces';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  /**Uusario logeado? */
  userLoged: User | undefined = this.authService.getCurrentUser();

  /**Varible donde vamos a guardar todos los usuarios */
  users: User[] | undefined = [];

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.userService.getUsersHttp().subscribe({
      next: (usuarios) => {
        this.users = usuarios;
      },
      error: () => {
        console.log("Error grave a la hora de traer los usuarios!");
      }
    })

    /**El guard casero */
    setTimeout(() => {
      if (this.userLoged?.rol === 1) {
        this.router.navigate(["home"]);
      }
    }, 5000)
  }

  deleteUser(userId: number) {
    const ok = confirm(`Seguro que quiere eliminar el usuario con la id ${userId} ?`);

    if (ok) {
      this.userService.deleteUserHttp(userId).subscribe({
        next: () => {
          alert(`El usuario con la id ${userId} fue eliminado`);
          window.location.reload();
        }
      })
    } else {
      return
    }

  }

  addAdmin(user: User) {
    let u = user;
    if (u.rol !== 0) {
      const ok = confirm(`Seguro que quiere hacer administrador al ususario con la id ${user.id} ?`);
      if (ok) {
        u.rol = 0;
        this.userService.putUserHttp(u).subscribe({
          next: () => {
            alert("Adminsitrador agregado correctamente...");
            window.location.reload();
          }
        });
      } else {
        return
      }
    } else {
      alert("El usuario ya es administrador...");
      return
    }
  }
}
