import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchItemComponent } from './search/search-item/search-item.component';
import { CardDetailsComponent } from './card-details/card-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { LogoComponent } from './header/logo/logo.component';
import { SearchAndSubmitComponent } from './header/search-and-submit/search-and-submit.component';
import { SettingsButtonComponent } from './header/settings-button/settings-button.component';
import { LoginBlockComponent } from './header/login-block/login-block.component';
import { FilteringBlockComponent } from './filtering-block/filtering-block.component';
import { SortingButtonComponent } from './filtering-block/sorting-button/sorting-button.component';
import { InputForFilteringComponent } from './filtering-block/input-for-filtering/input-for-filtering.component';
import { MoreButtonComponent } from './search/more-button/more-button.component';
import { VideoThumbnailComponent } from './search/video-thumbnail/video-thumbnail.component';
import { VideoTitleComponent } from './search/video-title/video-title.component';
import { ViewsCountComponent } from './search/views-count/views-count.component';
import { LikesCountComponent } from './search/likes-count/likes-count.component';
import { DislikesCountComponent } from './search/dislikes-count/dislikes-count.component';
import { CommentsCountComponent } from './search/comments-count/comments-count.component';
import { SearchFilterPipe } from './search-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    CardDetailsComponent,
    LogoComponent,
    SearchAndSubmitComponent,
    SettingsButtonComponent,
    LoginBlockComponent,
    FilteringBlockComponent,
    SortingButtonComponent,
    InputForFilteringComponent,
    MoreButtonComponent,
    VideoThumbnailComponent,
    VideoTitleComponent,
    ViewsCountComponent,
    LikesCountComponent,
    DislikesCountComponent,
    CommentsCountComponent,
    SearchFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
