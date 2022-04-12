import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-statistics-count',
  templateUrl: './statistics-count.component.html',
  styleUrls: ['./statistics-count.component.scss'],
})
export class StatisticsCountComponent {
  @Input() public response: string;

  @Input() public type: string;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      'dislike',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/svg/dislike.svg',
      ),
    );
    this.matIconRegistry.addSvgIcon(
      'comments',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/svg/comments.svg',
      ),
    );
  }
}
