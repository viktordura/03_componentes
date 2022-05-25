import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonRefreshPageRoutingModule } from './ion-refresh-routing.module';

import { IonRefreshPage } from './ion-refresh.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonRefreshPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonRefreshPage]
})
export class IonRefreshPageModule {}
