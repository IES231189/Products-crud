import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MostrarOfertaRepositoryService } from '../../infraestructure/Oferta/mostrar-oferta.service';
import { Ofertas } from '../../Domain/entities/Ofertas/Oferta';


@Injectable({
  providedIn: 'root'
})


export class MostrarOfertaUseCaseService {

  constructor(private ofertaRepository: MostrarOfertaRepositoryService) { }


  execute():Observable<Ofertas[]>{
    return this.ofertaRepository.listarOfertas()
  }

  
}


