import { Component, Input } from '@angular/core';
import { SearchItemService } from '@youtube/services/search-item.service';
import { SearchItem } from '../../models/search-item.component.model';
import { Button } from '@shared/models/shared.model';
import { Details } from '@youtube/models/card-details.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
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

  constructor(private searchItemService: SearchItemService) {}

  @Input() public searchResults: SearchItem;

  public dislikes: string = 'dislike';

  public underlining(date: string) {
    return this.searchItemService.underlining(date);
  }

  public addLink(id: string | undefined) {
    return this.searchItemService.addLink(id);
  }
}
