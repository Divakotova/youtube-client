import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.component.model';
import { responseDefault } from '../search-item/search-item.component';

@Component({
  selector: 'app-likes-count',
  templateUrl: './likes-count.component.html',
  styleUrls: ['./likes-count.component.scss'],
})
export class LikesCountComponent {
  @Input() public response: SearchItem = responseDefault;
}
