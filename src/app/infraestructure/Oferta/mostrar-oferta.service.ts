import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ofertas } from '../../Domain/entities/Ofertas/Oferta';



@Injectable({
  providedIn: 'root'
})

export class MostrarOfertaService {

  private apiUrl = 'http://localhost:8080/ofertas/'

  constructor( private http : HttpClient) { }


    listarOfertas():Observable<Ofertas[]>{
      return this.http.get<Ofertas[]>(this.apiUrl)
    }


}
