import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  public filter$ = new Subject<string>();

  public searchValue: BehaviorSubject<string> = new BehaviorSubject('');

  public logSubject: BehaviorSubject<string> = new BehaviorSubject(
    this.checkLocalStorage(),
  );

  constructor(private router: Router) {}

  public changeLog(newValue: string): void {
    this.logSubject.next(newValue);
  }

  public checkLocalStorage(): string {
    return localStorage.getItem('login') ? 'Logout' : 'Login';
  }

  public changeSearchValue(newValue: string) {
    this.searchValue.next(newValue);
  }

  public changeFilter(filter: string): void {
    this.filter$.next(filter);
  }

  public goMainPage(): void {
    this.router.navigate(['/main']);
  }
}
