import { Injectable } from '@angular/core';
import { Producto } from '../../Domain/entities/Producto/productos';
import { Observable } from 'rxjs';
import { ProductoRepository } from '../../infraestructure/Producto/mostrarProductoRepository.service';


@Injectable({
  providedIn: 'root'
})
export class ObtenerProductosService {

  constructor(private productoRepository: ProductoRepository) { }

  execute():Observable<Producto[]>{
    return this.productoRepository.listarProductos()
  }



}
