import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Componente } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) {}

  getusuarios(){
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  getAlbunes( url ){
    return this.http.get<any[]>( url );
  }

  getDataOpts( dir ){
    return this.http.get<Componente[]>(dir)
      .pipe(
        delay( 1500)
      );
  }


}
