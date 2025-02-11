import { Injectable } from '@angular/core';
import { MostrarOfertaUseCaseService } from '../use-cases/Ofertas/mostrar-oferta-use-case.service';
import { ActualizarOfertaUseCaseService } from '../use-cases/Ofertas/actualizar-oferta-use-case.service';
import { CrearOfertaUseCaseService } from '../use-cases/Ofertas/crear-oferta-use-case.service';
import { EliminarOfertaUseCaseService } from '../use-cases/Ofertas/eliminar-oferta-use-case.service';
import { Observable } from 'rxjs';
import { Ofertas } from '../Domain/entities/Ofertas/Oferta';


@Injectable({
  providedIn: 'root'
})
export class OfertasPresentationService {

  constructor(
    private listarOfertas :MostrarOfertaUseCaseService,
    private actualizar : ActualizarOfertaUseCaseService,
    private eliminar : EliminarOfertaUseCaseService

  ) { }


  mostrarOfertas():Observable<Ofertas[]>{
    return this.listarOfertas.execute()
  }

  actualizarOfertas(oferta : Ofertas):Observable<void>{
    return this.actualizar.execute(oferta)
  }

  eliminarOferta(id:number):Observable<void>{
    return this.eliminar.execute(id)
  }

}
