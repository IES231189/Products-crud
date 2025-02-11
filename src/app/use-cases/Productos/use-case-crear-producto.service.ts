import { Injectable } from '@angular/core';

import { CrearProductoRepositoryService } from '../../infraestructure/Producto/crear-producto-repository.service';
import { Producto } from '../../Domain/entities/Producto/productos';
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
