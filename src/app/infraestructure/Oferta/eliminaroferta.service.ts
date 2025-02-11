import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarofertaService {

  apiUrl = 'http://localhost:8080/ofertas/'

  constructor(private Http : HttpClient) { }

  eliminarOferta(id:number): Observable<void>{
    return this.Http.delete<void>(`${this.apiUrl}${id}`)
  }

}
