import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SingInPageComponent } from './pages/sing-in-page/sing-in-page.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SingInPageComponent],
  imports: [CommonModule, AuthRoutingModule, SharedModule, FormsModule],
  exports: [SingInPageComponent],
})
export class AuthModule {}
