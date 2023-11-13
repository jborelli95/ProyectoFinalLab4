import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Observable, map, of, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

function checkUser(): boolean | Observable<boolean> {
  const authService = inject(AuthService);

  return authService.checkStatusAuthentication().pipe(
    map(isAuth => {
      if (!isAuth) {
        return !isAuth
      }
      return isAuth
    })
  )
}

export const homeGuard: CanActivateFn = (route, state) => {
  return checkUser();
};
