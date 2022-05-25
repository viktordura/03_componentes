import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ion-refresh',
  templateUrl: './ion-refresh.page.html',
  styleUrls: ['./ion-refresh.page.scss'],
})
export class IonRefreshPage implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  doRefresh( event ){
    setTimeout(() => {
      this.items = Array(15)
      event.target.complete();
    }, 1500);
  }

}
