import { Component, Input } from '@angular/core';
import { Button } from '@shared/models/shared.model';

@Component({
  selector: 'app-filtering-block',
  templateUrl: './filtering-block.component.html',
  styleUrls: ['./filtering-block.component.scss'],
})
export class FilteringBlockComponent {
  public buttonProps: Button[] = [
    {
      type: 'data',
    },
    {
      type: 'count of views',
    },
  ];

  public filterValue: string;

  @Input() public filter: boolean;
}
