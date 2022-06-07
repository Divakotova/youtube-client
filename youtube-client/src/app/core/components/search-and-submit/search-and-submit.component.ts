import { Component } from '@angular/core';
import { Button } from '@shared/models/shared.model';
import { CoreService } from '../../services/core.service';

@Component({
  selector: 'app-search-and-submit',
  templateUrl: './search-and-submit.component.html',
  styleUrls: ['./search-and-submit.component.scss'],
})
export class SearchAndSubmitComponent {
  public searchValue: string;

  public buttonProps: Button = {
    type: 'submit',
    class: 'search-form_submit',
    content: 'search',
  };

  constructor(private readonly coreService: CoreService) {}

  public setAnySearchValue(): void {
    this.coreService.changeSearchValue(this.searchValue);
  }
}
