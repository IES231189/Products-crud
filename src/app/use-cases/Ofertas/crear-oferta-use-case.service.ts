import { Injectable } from '@angular/core';
import { CrearOfertaRepositoryService } from '../../infraestructure/Oferta/crear-oferta.service';
import { Ofertas } from '../../Domain/entities/Ofertas/Oferta';
import { Observable } from 'rxjs';
import { Producto } from '../../Domain/entities/Producto/productos';



@Injectable({
  providedIn: 'root'
})
export class CrearOfertaUseCaseService {

  constructor(private ofertaRepository : CrearOfertaRepositoryService) { }

  execute(oferta: Ofertas):Observable<Ofertas>{
    return this.ofertaRepository.crearOfertas(oferta)
  }

}
