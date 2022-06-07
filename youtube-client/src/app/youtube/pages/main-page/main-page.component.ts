import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from '@core/services/core.service';
import { HttpService } from '@youtube/services/http.service';
import { debounceTime, Subscription } from 'rxjs';
import { SearchItem } from '../../models/search-item.component.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit, OnDestroy {
  public searchResults: SearchItem[] | [];

  public filterValue: string;

  public direction: boolean;

  public searchSubscription: Subscription;

  public filterSubscription: Subscription;

  constructor(
    private readonly coreService: CoreService,
    private youtubeService: YoutubeService,
    private httpService: HttpService,
  ) {}

  ngOnInit(): void {
    this.searchSubscription = this.coreService.searchValue
      .pipe(debounceTime(600))
      .subscribe((searchValue) =>
        searchValue.length >= 3 ? this.search(searchValue) : false,
      );
    this.filterSubscription = this.coreService.filter$.subscribe((filter) =>
      this.changeFilter(filter),
    );
  }

  ngOnDestroy(): void {
    if (this.searchSubscription) {
      this.searchSubscription.unsubscribe();
    }

    if (this.filterSubscription) {
      this.filterSubscription.unsubscribe();
    }
  }

  public changeFilter(arg: string): void {
    this.filterValue = arg;
    this.direction = !this.direction;
  }

  public search(args: string): SearchItem[] | void {
    if (args) {
      this.httpService
        .getSearchList(args)
        .subscribe((data) => (this.searchResults = data.items));
      this.youtubeService.changeSearch(this.searchResults);
    }
  }
}
