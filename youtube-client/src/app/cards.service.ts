import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CardsService {
  public searchValue$ = new Subject<string>();

  public filter$ = new Subject<string>();

  public changeSearchValue(searchValue: string) {
    this.searchValue$.next(searchValue);
  }

  public changeFilter(filter: string) {
    this.filter$.next(filter);
  }
}
