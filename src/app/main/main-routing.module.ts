import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPage } from './main.page';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component: MainPage
  },
  {
    path: 'main',
    component: MainPage
  },
  {
    path: 'form',
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainPageRoutingModule {}
