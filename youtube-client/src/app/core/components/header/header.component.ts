import { Component } from '@angular/core';
import { Button } from '@shared/models/shared.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public route: any;

  public filter: boolean;

  public buttonProps: Button = {
    type: 'button',
    class: 'settings-button',
    disabled: false,
  };

  public handleClick(): void {
    if (window.location.pathname === '/main') {
      this.filter = !this.filter;
    }
  }
}
