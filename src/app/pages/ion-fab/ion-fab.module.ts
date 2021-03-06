import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonFabPageRoutingModule } from './ion-fab-routing.module';

import { IonFabPage } from './ion-fab.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonFabPageRoutingModule,
    ComponentsModule
  ],
  declarations: [IonFabPage]
})
export class IonFabPageModule {}
