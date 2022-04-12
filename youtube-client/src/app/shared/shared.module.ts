import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { VideoThumbnailComponent } from './components/video-thumbnail/video-thumbnail.component';
import { VideoTitleComponent } from './components/video-title/video-title.component';
import { ButtonComponent } from './components/button/button.component';
import { LogoComponent } from './components/logo/logo.component';
import { StatisticsCountComponent } from './components/statistics-count/statistics-count.component';
import { StatisticsBlockComponent } from './components/statistics-block/statistics-block.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LogoComponent,
    VideoThumbnailComponent,
    VideoTitleComponent,
    ButtonComponent,
    StatisticsCountComponent,
    StatisticsBlockComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    RouterModule,
  ],
  exports: [
    LogoComponent,
    VideoThumbnailComponent,
    VideoTitleComponent,
    StatisticsCountComponent,
    StatisticsBlockComponent,
    ButtonComponent,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  ],
})
export class SharedModule {}
