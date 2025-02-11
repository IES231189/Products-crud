import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActualizarOfertaRepositoryService } from '../../infraestructure/Oferta/actualizar-oferta.service';
import { Producto } from '../../Domain/entities/Producto/productos';
import { Ofertas } from '../../Domain/entities/Ofertas/Oferta';



@Injectable({
  providedIn: 'root'
})
export class ActualizarOfertaUseCaseService {

  constructor(private ofertaRepository : ActualizarOfertaRepositoryService) { }

  execute(oferta:Ofertas):Observable<void>{
    return this.ofertaRepository.ActualizarOferta(oferta)

  }

}

