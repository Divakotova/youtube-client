import { Component, Input } from '@angular/core';
import { CardsService } from 'src/app/cards.service';

@Component({
  selector: 'app-sorting-button',
  templateUrl: './sorting-button.component.html',
  styleUrls: ['./sorting-button.component.scss'],
})
export class SortingButtonComponent {
  @Input() sortingType: string = '';

  @Input() filterValue: string = '';

  public sortingDirection: boolean = false;

  constructor(private readonly filterService: CardsService) {}

  public setAnyFilter(): void {
    this.filterService.changeFilter(this.sortingType);
  }
}
