import { Component, OnInit, ViewChild } from '@angular/core';
import { IonReorderGroup, ItemReorderEventDetail } from '@ionic/angular';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  personajes : string[] = ['aquaman','Superman','Batman','Mujer maravilla','Flash'];

  @ViewChild(IonReorderGroup) reorderGroup : IonReorderGroup;


  constructor() { }

  ngOnInit() {
  }

  doReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    
    // Me permite reorganizar el arreglo
    this.personajes = ev.detail.complete(this.personajes);
    console.log(ev)

    
  }

  changeStatus(){
    this.reorderGroup.disabled = !this.reorderGroup.disabled;

    const reorder = document.getElementById('reorder');
    

    console.log(this.reorderGroup);
  }

}
