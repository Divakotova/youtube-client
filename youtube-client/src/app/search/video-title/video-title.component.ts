import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.component.model';
import { responseDefault } from '../search-item/search-item.component';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss'],
})
export class VideoTitleComponent {
  @Input() public response: SearchItem = responseDefault;
}
