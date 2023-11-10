import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../interfaces/interfaces';
import { Observable } from 'rxjs';

/**La funcion tiene que devolver un booleano... */
export const userAuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const user: User | undefined = authService.getCurrentUser();
  const validation: boolean = authService.checkStatusAuthentication();

  return true
};
