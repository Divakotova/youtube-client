import { Component } from '@angular/core';
import { SearchItem } from './search-item.component.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  card: SearchItem = {
    snippet: {
      publishedAt: '',
      title: '',
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
