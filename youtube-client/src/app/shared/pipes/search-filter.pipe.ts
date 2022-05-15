import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../../youtube/models/search-item.component.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(
    value: SearchItem[],
    args: string,
    direction: boolean,
  ): SearchItem[] | [] {
    if (args === '') return value;
    return this.sortButton(args, direction, value);
  }

  private sortButton(args: string, direction: boolean, value: SearchItem[]) {
    if (args === 'data') {
      return direction
        ? value.sort(this.sortPublishedUp)
        : value.sort(this.sortPublishedDown);
    }
    if (args === 'count of views') {
      return direction
        ? value.sort(this.sortCountViewUp)
        : value.sort(this.sortCountViewDown);
    }
    if (value && this.getFilter(value, args)) {
      return this.sortInput(args, value);
    } else {
      return value;
    }
  }

  private sortInput(args: string, value: SearchItem[]) {
    return value.sort((a, b) => {
      const firstArg = this.getFilter(a, args)[args];
      const secondArg = this.getFilter(b, args)[args];
      return firstArg > secondArg ? 1 : firstArg < secondArg ? -1 : 0;
    });
  }

  private sortPublishedUp(a: SearchItem, b: SearchItem): number {
    return (
      Number(new Date(a.snippet.publishedAt)) -
      Number(new Date(b.snippet.publishedAt))
    );
  }

  private sortPublishedDown(a: SearchItem, b: SearchItem): number {
    return (
      Number(new Date(b.snippet.publishedAt)) -
      Number(new Date(a.snippet.publishedAt))
    );
  }

  private sortCountViewUp(a: SearchItem, b: SearchItem): number {
    return Number(b.statistics.viewCount) - Number(a.statistics.viewCount);
  }

  private sortCountViewDown(a: SearchItem, b: SearchItem): number {
    return Number(a.statistics.viewCount) - Number(b.statistics.viewCount);
  }

  private getFilter(obj: any, value: string): any {
    if (Object.keys(obj).includes(value)) {
      return obj;
    }
    for (const i in obj) {
      if (obj[i] instanceof Object) {
        return this.getFilter(obj[i], value);
      }
    }
    return false;
  }
}
