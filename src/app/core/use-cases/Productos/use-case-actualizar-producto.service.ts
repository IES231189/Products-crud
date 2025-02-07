// caso de uso
import { Injectable } from '@angular/core';
import { ActualizarService } from '../../../infraestructure/repositories/actualizar.service';
import { Producto } from '../../entities/Producto/productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseCaseActualizarProductoService {

  constructor(private actualizarService: ActualizarService) { }

  // Ejecuta la actualización del producto
  execute(producto: Producto): Observable<void> {
    return this.actualizarService.actualizarProducto(producto);
  }
}
