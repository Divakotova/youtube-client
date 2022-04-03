import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.component.model';

import { responseDefault } from '../search-item/search-item.component';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent {
  @Input() public response: SearchItem = responseDefault;
}
