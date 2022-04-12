import { Component, Input } from '@angular/core';
import { Details } from '@youtube/models/card-details.model';
import { Thumbnails } from 'src/app/youtube/models/search-item.component.model';

@Component({
  selector: 'app-video-thumbnail',
  templateUrl: './video-thumbnail.component.html',
  styleUrls: ['./video-thumbnail.component.scss'],
})
export class VideoThumbnailComponent {
  @Input() public response: Thumbnails;

  @Input() public className: Details;
}
