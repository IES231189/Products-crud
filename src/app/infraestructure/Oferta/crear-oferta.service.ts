import { Injectable } from '@angular/core';
import { Producto } from '../../Domain/entities/Producto/productos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Ofertas } from '../../Domain/entities/Ofertas/Oferta';


@Injectable({
  providedIn: 'root'
})
export class CrearOfertaRepositoryService {

  apiUrl='http://localhost:8080/ofertas/'

  constructor(private http: HttpClient) { }


  crearOfertas(oferta: Ofertas):Observable<Ofertas>{
    return this.http.post<Ofertas>(this.apiUrl , oferta)
  }


}
