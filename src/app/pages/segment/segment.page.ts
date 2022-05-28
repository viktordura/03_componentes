import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  superHeroes : Observable<any>;
  heroeBuscar : string = "";

  constructor( private dataService : DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getDataOpts('/assets/data/superheroes.json');
    
  }

  segmentChanged( event ){
    this.heroeBuscar = event.detail.value;
    console.log(this.heroeBuscar)
  }

}
