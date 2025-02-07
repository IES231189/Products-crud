import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../../core/entities/Producto/productos';

@Injectable({
  providedIn: 'root'
})
export class ActualizarService {

  private apiUrl = 'http://localhost:8080/productos/';

  constructor(private http: HttpClient) { }

  actualizarProducto(producto: Producto): Observable<void> {
    return this.http.put<void>(this.apiUrl, producto);
  }


}
