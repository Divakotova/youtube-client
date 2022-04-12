import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
    return this.handle();
  }

  canLoad():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
    return this.handle();
  }

  public checkLocalStorage() {
    return localStorage.getItem('login');
  }

  public handle() {
    const isNavigationAllowed = this.checkLocalStorage() ? true : false;
    return (
      isNavigationAllowed || this.router.createUrlTree(['/', 'auth', 'sing-in'])
    );
  }
}
