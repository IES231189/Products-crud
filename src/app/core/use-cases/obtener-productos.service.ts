import { Injectable } from '@angular/core';
import { Producto } from '../entities/productos';
import { Observable } from 'rxjs';
import { ProductoRepository } from '../../infraestructure/repositories/repositories/producto.repository.service';

@Injectable({
  providedIn: 'root'
})
export class ObtenerProductosService {

  constructor(private productoRepository: ProductoRepository) { }

  execute():Observable<Producto[]>{
    return this.productoRepository.listarProductos()
  }

  

}
