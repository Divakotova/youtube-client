import { Component } from '@angular/core';
import { SearchItem } from '../search-item/search-item.component.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent {
  cardDetails: SearchItem = {
    id: '',
    snippet: {
      publishedAt: '',
      title: '',
      description: '',
      thumbnails: {
        default: {
          url: '',
          width: 0,
          height: 0,
        },
      },
      channelTitle: '',
    },
    statistics: {
      viewCount: '',
      likeCount: '',
      dislikeCount: '',
      favoriteCount: '',
      commentCount: '',
    },
  };
}
