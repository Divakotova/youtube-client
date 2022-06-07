import { Component, Input } from '@angular/core';
import { Button } from '@shared/models/shared.model';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-sorting-options',
  templateUrl: './sorting-options.component.html',
  styleUrls: ['./sorting-options.component.scss'],
})
export class SortingOptionsComponent {
  @Input() sortingType: Button;

  public sortingDirection: boolean;

  constructor(private readonly filterService: CoreService) {}

  public setAnyFilter(): void {
    this.filterService.changeFilter(this.sortingType.type);
  }
}
