import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../../Domain/entities/Producto/productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrearProductoRepositoryService {

  private apiUrl = 'http://localhost:8080/productos/';


  constructor(private http : HttpClient) { }

    añadirProducto(producto: Producto): Observable<Producto> {
      return this.http.post<Producto>(this.apiUrl, producto);
    }

}
