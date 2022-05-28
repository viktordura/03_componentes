import { Component, OnInit } from '@angular/core';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes : Observable<Componente[]>;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.componentes =  this.dataService.getDataOpts('/assets/data/menu-opts.json');
  }

}
