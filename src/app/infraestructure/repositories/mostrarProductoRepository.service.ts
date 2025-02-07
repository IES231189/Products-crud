import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../../core/entities/Producto/productos';

@Injectable({ providedIn: 'root' })
export class ProductoRepository {

  private apiUrl = 'http://localhost:8080/productos/';


  constructor(private http: HttpClient) {}


  listarProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(this.apiUrl);
  }





}
