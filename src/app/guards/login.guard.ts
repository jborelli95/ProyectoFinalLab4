import { inject } from '@angular/core';
import { CanActivateFn, RouteConfigLoadEnd, Router } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../services/auth.service';

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

export const loginGuard: CanActivateFn = (route, state) => {
  return checkUser();
};
