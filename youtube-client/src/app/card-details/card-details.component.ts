import { Component } from '@angular/core';
import { SearchItem } from '../models/search-item.component.model';
import { responseDefault } from '../search/search-item/search-item.component';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent {
  public cardDetails: SearchItem = responseDefault;
}
