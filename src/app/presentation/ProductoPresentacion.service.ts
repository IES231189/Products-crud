import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../Domain/entities/Producto/productos';
import { UseCaseEliminarProductoService } from '../use-cases/Productos/use-case-eliminar-producto.service';
import { ObtenerProductosService } from '../use-cases/Productos/obtener-productos.service';
import { UseCaseActualizarProductoService } from '../use-cases/Productos/use-case-actualizar-producto.service';



@Injectable({
  providedIn: 'root'
})
export class ProductoPresentacionService {

  constructor(
    private listarProductos: ObtenerProductosService,
    private actualizarProductoService: UseCaseActualizarProductoService,
    private eliminarProductoService: UseCaseEliminarProductoService
  ) {}

  obtenerProductos(): Observable<Producto[]> {
    return this.listarProductos.execute();
  }

  actualizarProducto(producto: Producto): Observable<void> {
    return this.actualizarProductoService.execute(producto);
  }

  eliminarProducto(id: number): Observable<void> {
    return this.eliminarProductoService.eliminarProducto(id);
  }

}
