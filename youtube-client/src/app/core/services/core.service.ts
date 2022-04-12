import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoreService {
  constructor(private router: Router) {}

  private valueSubject: BehaviorSubject<string> = new BehaviorSubject('');

  searchValue$: Observable<string> = this.valueSubject.asObservable();

  public filter$ = new Subject<string>();

  public changeSearchValue(newValue: string) {
    this.valueSubject.next(newValue);
  }

  public changeFilter(filter: string): void {
    this.filter$.next(filter);
  }

  public goMainPage(): void {
    this.router.navigate(['/main']);
  }
}
