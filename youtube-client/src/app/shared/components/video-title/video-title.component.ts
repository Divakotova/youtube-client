import { Component, Input } from '@angular/core';
import { Details } from '@youtube/models/card-details.model';

@Component({
  selector: 'app-video-title',
  templateUrl: './video-title.component.html',
  styleUrls: ['./video-title.component.scss'],
})
export class VideoTitleComponent {
  @Input() public response: string;

  @Input() public className: Details;
}
