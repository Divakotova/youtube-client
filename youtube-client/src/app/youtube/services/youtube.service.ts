import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SearchResponse } from '../models/search-response.model';
import { SearchItem } from '../models/search-item.component.model';

import * as response from '../../response.json';

@Injectable()
export class YoutubeService {
  private response: SearchResponse = response;

  public searchValue$ = new Subject<string>();

  public filter$ = new Subject<string>();

  public changeSearchValue(searchValue: string): void {
    this.searchValue$.next(searchValue);
  }

  public changeFilter(filter: string): void {
    this.filter$.next(filter);
  }

  public search(args: string): SearchItem[] | [] {
    if (args) {
      args = args.toLowerCase();
      const searchResults = this.response.items.filter(function (
        data: SearchItem
      ): boolean {
        return JSON.stringify(data).toLowerCase().includes(args);
      });
      return searchResults;
    }
    return [];
  }

  public selectCard(id: string): SearchItem {
    const index = this.response.items.findIndex((item) => item.id === id);
    return this.response.items[index];
  }
}
