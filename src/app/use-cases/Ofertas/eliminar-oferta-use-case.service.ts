import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EliminarProductoRepositoryService } from '../../infraestructure/Producto/eliminar-producto-repository.service';
import { EliminarofertaRepositoryService } from '../../infraestructure/Oferta/eliminaroferta.service';
import { Producto } from '../../Domain/entities/Producto/productos';



@Injectable({
  providedIn: 'root'
})


export class EliminarOfertaUseCaseService {

  constructor(private OfertaRepository : EliminarofertaRepositoryService) { }

  execute(id : number):Observable<void>{
    return this.OfertaRepository.eliminarOferta(id)
  }

  

}
