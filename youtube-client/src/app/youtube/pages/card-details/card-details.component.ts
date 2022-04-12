import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItem } from '../../models/search-item.component.model';
import { YoutubeService } from '@youtube/services/youtube.service';
import { SearchItemService } from '@youtube/services/search-item.service';
import { Details } from '@youtube/models/card-details.model';
import { Button } from '@shared/models/shared.model';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.component.html',
  styleUrls: ['./card-details.component.scss'],
})
export class CardDetailsComponent implements OnInit {
  public cardDetails: SearchItem;

  public routerId: string;

  public classes: Details = {
    title: 'card-detail_title',
    video: 'video-cover',
    statistics: 'statistics-details',
  };

  public buttonProps: Button = {
    type: 'button',
    class: 'back-button',
  };

  constructor(
    private router: ActivatedRoute,
    private youtubeService: YoutubeService,
    private cardService: SearchItemService,
  ) {}

  ngOnInit(): void {
    this.routerId = this.router.snapshot.params['id'];
    this.cardDetails = this.selectCard(this.routerId);
  }

  public underlining(date: string): string {
    return this.cardService.underlining(date);
  }

  public selectCard(id: string): SearchItem {
    return this.youtubeService.selectCard(id);
  }
}
