import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingInPageComponent } from './pages/sing-in-page/sing-in-page.component';

const routes: Routes = [
  {
    path: 'sing-in',
    component: SingInPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
