import { Injectable } from '@angular/core';
import { UnderliningColor } from '@youtube/models/search-item.component.model';

@Injectable()
export class SearchItemService {
  public underliningColor: UnderliningColor = {
    blue: '#2F80ED',
    red: '#EB5757',
    green: '#27AE60',
    yellow: '#F2C94C',
  };

  public underlining(date: string): string {
    const halfYear = 6;
    const week = 7;
    const publishDate = date;
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

  public addLink(id: string | undefined): string {
    return id ? '/main/' + id : '/main/';
  }
}
