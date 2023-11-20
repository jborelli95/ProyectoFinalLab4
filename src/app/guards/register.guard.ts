import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, map, tap } from 'rxjs';
import { inject } from '@angular/core';

function checkUser(): boolean | Observable<boolean>{
  const router = inject(Router);
  const authService = inject(AuthService);

  return authService.checkStatusAuthentication().pipe(
    tap(isAuth  => {
      if(isAuth){
        router.navigate(["home"]);
      }
    }),
    map(isAuth => !isAuth)
  )
}

export const registerGuard: CanActivateFn = (route, state) => {
  return checkUser();
};
