import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from '@core/services/core.service';
import { Subscription } from 'rxjs';
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

  @Input() public searchValue: string;

  constructor(
    private readonly searchService: CoreService,
    private readonly filterService: CoreService,
    private youtubeService: YoutubeService,
  ) {}

  ngOnInit(): void {
    this.searchSubscription = this.searchService.searchValue$.subscribe(
      (searchValue) => this.search(searchValue),
    );
    this.filterSubscription = this.filterService.filter$.subscribe((filter) =>
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
    this.searchResults = this.youtubeService.search(args);
  }
}
