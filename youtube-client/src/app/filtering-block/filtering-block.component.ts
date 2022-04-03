import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
})
export class FilteringBlockComponent {
  public sortingTypes: string[] = ['data', 'count of views'];

  public filterValue: string = '';

  @Input() public filter: boolean = false;
}
