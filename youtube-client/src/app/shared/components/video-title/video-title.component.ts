import { Component, Input } from '@angular/core';
import { Details } from '@youtube/models/card-details.model';
import { SearchItem } from 'src/app/youtube/models/search-item.component.model';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss'],
})
export class VideoTitleComponent {
  @Input() public response: SearchItem;

  @Input() public className: Details;
}
