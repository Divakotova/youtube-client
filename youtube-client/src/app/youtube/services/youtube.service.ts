import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SearchItem } from '../models/search-item.component.model';

@Injectable()
export class YoutubeService {
  public search: BehaviorSubject<any> = new BehaviorSubject('');

  public changeSearch(result: SearchItem[]): void {
    this.search.next(result);
  }
}
