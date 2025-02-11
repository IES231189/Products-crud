
import { Injectable } from '@angular/core';
import { ActualizarService } from '../../infraestructure/Producto/actualizar.service';
import { Producto } from '../../Domain/entities/Producto/productos';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseCaseActualizarProductoService {

  constructor(private actualizarService: ActualizarService) { }

  execute(producto: Producto): Observable<void> {
    return this.actualizarService.actualizarProducto(producto);
  }
}
