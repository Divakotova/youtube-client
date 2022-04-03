import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { responseDefault } from '../search-item/search-item.component';
import { SearchItem } from 'src/app/models/search-item.component.model';

@Component({
  selector: 'app-comments-count',
  templateUrl: './comments-count.component.html',
  styleUrls: ['./comments-count.component.scss'],
})
export class CommentsCountComponent {
  @Input() public response: SearchItem = responseDefault;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      'comments',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/svg/comments.svg',
      ),
    );
  }
}
