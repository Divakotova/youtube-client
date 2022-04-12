import { Component, Input } from '@angular/core';
import { Details } from '@youtube/models/card-details.model';
import { SearchItem } from '@youtube/models/search-item.component.model';

@Component({
  selector: 'app-statistics-block',
  templateUrl: './statistics-block.component.html',
  styleUrls: ['./statistics-block.component.scss'],
})
export class StatisticsBlockComponent {
  @Input() public cardDetails: SearchItem;

  @Input() public className: Details;
}
