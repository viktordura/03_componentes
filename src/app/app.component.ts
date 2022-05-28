import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';


import { Observable } from 'rxjs';

import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  componentes : Observable<Componente[]>;

  constructor(
    private dataService : DataService,
    private platform : Platform,
  ){
      this.initializeApp();
   }

  initializeApp(){
    this.platform.ready().then(() => {
      console.log('Ready')
      this.componentes =  this.dataService.getDataOpts('/assets/data/menu-opts.json');
    });
    
  }
}
