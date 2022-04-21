import { Component, Input } from '@angular/core';
import { SearchItemService } from '@youtube/services/search-item.service';
import { SearchItem } from '../../models/search-item.component.model';
import { Button } from '@shared/models/shared.model';
import { Details } from '@youtube/models/card-details.model';
import { HttpService } from '@youtube/services/http.service';
import { YoutubeService } from '@youtube/services/youtube.service';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  public response: SearchItem;

  public buttonProps: Button = {
    type: 'button',
    class: 'more-button',
    content: 'more...',
  };

  public classes: Details = {
    video: 'video-thumbnail',
    title: 'card-title',
    statistics: 'statistics',
  };

  constructor(
    private searchItemService: SearchItemService,
    private httpService: HttpService,
    private youtubeService: YoutubeService,
  ) {}

  @Input() public searchResults: any;

  public underlining(date: string) {
    return this.searchItemService.underlining(date);
  }

  public addLink(id: string | undefined) {
    //this.youtubeService.changeSearch(this.searchResults);
    return this.searchItemService.addLink(id);
  }

  public selectCard(id: string): void {
    console.log(id);
    console.log(this.searchResults);
    this.httpService
      .getDetailsId([id])
      .subscribe((data) => (this.response = data.items));
  }
}
