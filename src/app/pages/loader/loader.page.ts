import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.page.html',
  styleUrls: ['./loader.page.scss'],
})
export class LoaderPage implements OnInit {

  loading : HTMLIonLoadingElement;

  constructor(public loadingController : LoadingController) { }

  ngOnInit() {
  }

  onClick(){
    this.presentLoading('Cargando');

    setTimeout(() => {
      this.loading.dismiss();
    }, 2000);
  }

  async presentLoading(message : string) {
     this.loading = await this.loadingController.create({
      message: message,
    });
    await this.loading.present();
  }

}
