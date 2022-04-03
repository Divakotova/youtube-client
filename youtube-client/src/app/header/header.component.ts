import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public filter: boolean = false;

  public handleClick(): void {
    this.filter = !this.filter;
  }
}
