import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonRefreshPage } from './ion-refresh.page';

const routes: Routes = [
  {
    path: '',
    component: IonRefreshPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IonRefreshPageRoutingModule {}
