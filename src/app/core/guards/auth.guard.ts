import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthState } from '../services/auth.state';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {

  const authState = inject(AuthState);
  const router = inject(Router);

  return authState.user$.pipe(
    map(isAuth => isAuth ? true : router.createUrlTree(['/login']))
  );
}
