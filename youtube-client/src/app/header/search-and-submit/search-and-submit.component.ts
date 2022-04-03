import { Component } from '@angular/core';
import { CardsService } from 'src/app/cards.service';

@Component({
  selector: 'app-search-and-submit',
  templateUrl: './search-and-submit.component.html',
  styleUrls: ['./search-and-submit.component.scss'],
})
export class SearchAndSubmitComponent {
  public searchValue: string = '';

  constructor(private readonly searchService: CardsService) {}

  public setAnySearchValue(): void {
    this.searchService.changeSearchValue(this.searchValue);
  }
}
