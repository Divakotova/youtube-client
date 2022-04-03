import { Component, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { SearchItem } from 'src/app/models/search-item.component.model';
import { responseDefault } from '../search-item/search-item.component';

@Component({
  selector: 'app-dislikes-count',
  templateUrl: './dislikes-count.component.html',
  styleUrls: ['./dislikes-count.component.scss'],
})
export class DislikesCountComponent {
  @Input() public response: SearchItem = responseDefault;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
  ) {
    this.matIconRegistry.addSvgIcon(
      'dislikes',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        './assets/svg/dislike.svg',
      ),
    );
  }
}
