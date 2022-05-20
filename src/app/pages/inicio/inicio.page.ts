import { Component, OnInit } from '@angular/core';


interface Componente{
  icon: string;
  name: string;
  redirectTo: string;

}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Componente[] = [
    {
      icon: 'american-football-outline',
      name:'Action Sheet',
      redirectTo:'/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name:'Alert',
      redirectTo:'/alert'
    },
    {
      icon:'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon:'radio-button-off-outline',
      name: 'Botones',
      redirectTo: '/botones'
    },
    {
      icon:'id-card-outline',
      name: 'Card',
      redirectTo: '/cards'
    },
    {
      icon:'checkmark-done-circle-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
    {
      icon:'calendar-outline',
      name: 'Date time',
      redirectTo: '/datetime'
    },
    {
      icon:'calendar-outline',
      name: 'Ion fab',
      redirectTo: '/ion-fab'
    }

    
  ];

  constructor() { }

  ngOnInit() {
  }

}
