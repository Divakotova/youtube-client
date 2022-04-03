import { Component, Input, OnInit } from '@angular/core';
import { SearchResponse } from '../../models/search-response.model';
import { CardsService } from 'src/app/cards.service';
import { SearchItem } from 'src/app/models/search-item.component.model';

import * as response from '../../response.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {
  public searchResults: SearchItem[] = [];

  public filterValue: string = '';

  public direction: boolean = false;

  private response: SearchResponse = response;

  @Input() public searchValue: string = '';

  constructor(
    private readonly searchService: CardsService,
    private readonly filterService: CardsService,
  ) {}

  ngOnInit(): void {
    this.searchService.searchValue$.subscribe((searchValue) =>
      this.search(searchValue),
    );
    this.filterService.filter$.subscribe((filter) => this.changeFilter(filter));
  }

  public changeFilter(arg: string) {
    this.filterValue = arg;
    this.direction = !this.direction;
  }

  public search(args: string): SearchItem[] | void {
    if (!response || !args) return undefined;
    if (args) {
      args = args.toLowerCase();
      return (this.searchResults = this.response.items.filter(function (
        data: SearchItem,
      ): boolean {
        return JSON.stringify(data).toLowerCase().includes(args);
      }));
    }
  }
}
