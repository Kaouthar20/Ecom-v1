import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  //Une variable pour definir de la partie backend se trouve ou?
public host: string='http://localhost:8080'

  constructor(private http: HttpClient) { }

  public getResource(url){
  return this.http.get(this.host+url);
  }
}
