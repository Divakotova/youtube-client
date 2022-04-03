import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from './models/search-item.component.model';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(value: SearchItem[], args: string, direction: boolean): any {
    if (!value) return undefined;
    if (args === '') return value;
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
    if (this.getFilter(value, args)) {
      return value.sort((a, b): any => {
        const firstArg = this.getFilter(a, args)[args];
        const secondArg = this.getFilter(b, args)[args];
        if (firstArg > secondArg) {
          return 1;
        }
        if (firstArg < secondArg) {
          return -1;
        }
        return 0;
      });
    } else {
      return value;
    }
  }

  private sortPublishedUp(a: SearchItem, b: SearchItem): number {
    return +new Date(a.snippet.publishedAt) - +new Date(b.snippet.publishedAt);
  }

  private sortPublishedDown(a: SearchItem, b: SearchItem): number {
    return +new Date(b.snippet.publishedAt) - +new Date(a.snippet.publishedAt);
  }

  private sortCountViewUp(a: SearchItem, b: SearchItem): number {
    return +b.statistics.viewCount - +a.statistics.viewCount;
  }

  private sortCountViewDown(a: SearchItem, b: SearchItem): number {
    return +a.statistics.viewCount - +b.statistics.viewCount;
  }

  private getFilter(obj: any, value: string): any {
    let arrKeys: string[] = [];
    if (Object.keys(obj).includes(value)) {
      arrKeys.push(value);
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
