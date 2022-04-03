import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.component.model';
import { responseDefault } from '../search-item/search-item.component';

@Component({
  selector: 'app-views-count',
  templateUrl: './views-count.component.html',
  styleUrls: ['./views-count.component.scss'],
})
export class ViewsCountComponent {
  @Input() public response: SearchItem = responseDefault;
}
