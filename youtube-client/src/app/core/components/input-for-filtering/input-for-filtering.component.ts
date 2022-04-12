import { Component, Input } from '@angular/core';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-input-for-filtering',
  templateUrl: './input-for-filtering.component.html',
  styleUrls: ['./input-for-filtering.component.scss'],
})
export class InputForFilteringComponent {
  constructor(private readonly filterService: CoreService) {}

  @Input() public filterValue: string;

  public setAnyFilter(): void {
    this.filterService.changeFilter(this.filterValue);
  }
}
