import { Injectable } from '@angular/core';

import { CrearProductoRepositoryService } from '../../../infraestructure/repositories/crear-producto-repository.service';
import { Producto } from '../../entities/Producto/productos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseCaseCrearProductoService {

  constructor(private productoRepository : CrearProductoRepositoryService) { }


  execute(producto:Producto):Observable<Producto>{
    return this.productoRepository.añadirProducto(producto)
  }



}
