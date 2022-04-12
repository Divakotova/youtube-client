import { Component } from '@angular/core';
import { Button } from '@shared/models/shared.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public filter: boolean;

  public buttonProps: Button = {
    type: 'button',
    class: 'settings-button',
  };

  public handleClick(): void {
    this.filter = !this.filter;
  }
}
