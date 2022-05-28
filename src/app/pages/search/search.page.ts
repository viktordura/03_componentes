import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albunes : any[] = [];
  textoBuscar: string = "";

  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbunes('https://jsonplaceholder.typicode.com/albums').subscribe( albunes => {
      this.albunes = albunes;
    });
  }


  onSearch( event ){
    this.textoBuscar = event.detail.value;
  }
}
