import { Component, Input } from '@angular/core';
import { SearchItem } from 'src/app/models/search-item.component.model';

type UnderliningColor = {
  blue: string;
  red: string;
  green: string;
  yellow: string;
};

export let responseDefault = {
  snippet: {
    publishedAt: '',
    title: '',
    thumbnails: {
      default: {
        url: '',
        width: 0,
        height: 0,
      },
      medium: {
        url: '',
        width: 0,
        height: 0,
      },
      high: {
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

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  public underliningColor: UnderliningColor = {
    blue: '#2F80ED',
    red: '#EB5757',
    green: '#27AE60',
    yellow: '#F2C94C',
  };

  @Input() public searchResults: SearchItem = responseDefault;

  public underlining() {
    const halfYear: number = 6;
    const week: number = 7;
    const publishDate: string = this.searchResults.snippet.publishedAt;
    const publishMonth = new Date(publishDate).getMonth() + 1;
    const currentMonth = new Date().getMonth() + 1;

    if (publishMonth === currentMonth) {
      return new Date(publishDate).getDate() - new Date().getDate() < week
        ? this.underliningColor.blue
        : this.underliningColor.green;
    }
    if (publishMonth - currentMonth > halfYear) {
      return this.underliningColor.red;
    }
    return this.underliningColor.yellow;
  }
}
