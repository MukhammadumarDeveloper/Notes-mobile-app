import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'auth',
    component: AuthComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
