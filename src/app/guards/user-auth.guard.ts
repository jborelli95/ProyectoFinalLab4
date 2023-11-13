import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/interfaces';
import { Observable, tap } from 'rxjs';


function check():boolean | Observable<boolean>{
  const authService = inject(AuthService);
  const router = inject(Router);
  let user: User | undefined = authService.getCurrentUser();

  return authService.checkStatusAuthentication().pipe(
    tap(isAuth => {
      if(!isAuth){
        router.navigate(['/login'])
      }
    })
  )
}
export const userAuthGuard: CanActivateFn = (route, state) => {
  return check();
}
