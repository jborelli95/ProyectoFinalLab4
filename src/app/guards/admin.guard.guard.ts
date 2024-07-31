import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Observable, map, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/interfaces';

function check(): boolean | Observable<boolean> {
  const authService = inject(AuthService);
  const router = inject(Router);
  const user: User | undefined = authService.getCurrentUser();

  return authService.checkStatusAuthentication().pipe(
    tap(isAuth => {
      if (!isAuth) {
        alert("Debes estar logeado para acceder a esta seccion de la página...")
        router.navigate(['/login'])
      } else {
        if (user?.rol !== 0) {
          setTimeout(() => {
            router.navigate(["home"]);
          }, 5000)
        }
      }
    })
  )
}

export const adminGuardGuard: CanActivateFn = (route, state) => {
  return check();
};
