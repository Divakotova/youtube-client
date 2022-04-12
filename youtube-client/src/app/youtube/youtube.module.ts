import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDetailsComponent } from './pages/card-details/card-details.component';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchFilterPipe } from '../shared/pipes/search-filter.pipe';
import { SharedModule } from '../shared/shared.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { YoutubeService } from './services/youtube.service';
import { SearchItemService } from './services/search-item.service';

@NgModule({
  declarations: [
    CardDetailsComponent,
    SearchItemComponent,
    SearchFilterPipe,
    MainPageComponent,
  ],
  imports: [CommonModule, YoutubeRoutingModule, SharedModule],
  exports: [
    CardDetailsComponent,
    SearchItemComponent,
    SearchFilterPipe,
    MainPageComponent,
  ],
  providers: [YoutubeService, SearchItemService],
})
export class YoutubeModule {}
