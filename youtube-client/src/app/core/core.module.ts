import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { LoginBlockComponent } from './components/login-block/login-block.component';
import { SearchAndSubmitComponent } from './components/search-and-submit/search-and-submit.component';
import { FilteringBlockComponent } from './components/filtering-block/filtering-block.component';
import { InputForFilteringComponent } from './components/input-for-filtering/input-for-filtering.component';
import { FormsModule } from '@angular/forms';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { RouterModule } from '@angular/router';
import { SortingOptionsComponent } from './components/sorting-options/sorting-options.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginBlockComponent,
    SearchAndSubmitComponent,
    FilteringBlockComponent,
    InputForFilteringComponent,
    SortingOptionsComponent,
    Error404PageComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule, RouterModule],
  exports: [HeaderComponent],
})
export class CoreModule {}
