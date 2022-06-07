import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    return this.handle();
  }

  canLoad(): boolean | UrlTree {
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
