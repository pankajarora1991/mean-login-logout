import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService
) {}
  canActivate(route: ActivatedRouteSnapshot) {
      const userName = this.authService.currentUserName;
      if (userName) {
          // if user logged in return true
          return true;
      }

      // redirect url if user not logged in
      this.router.navigate(['/login']);
      return false;
  }
}
