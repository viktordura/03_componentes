import { Component, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';

import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  

  constructor(public modalCtrl : ModalController) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps:{
        nombre : 'Victor Duran',
        pais: 'Colombia'
      }
    });
    await modal.present();

    const resp = await modal.onWillDismiss();
    console.log(JSON.stringify(resp))
  }

}
