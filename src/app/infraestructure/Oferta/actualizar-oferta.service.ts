import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ofertas } from '../../Domain/entities/Ofertas/Oferta';
import { HttpClient } from '@angular/common/http';
import { HtmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ActualizarOfertaRepositoryService {

  apiUrl = 'http://localhost:8080/ofertas/'

  constructor(private http:HttpClient) { }


  ActualizarOferta(oferta : Ofertas):Observable<void>{
    return this.http.put<void>(this.apiUrl ,oferta )
  }

}
