import { Injectable } from '@angular/core';

import { EliminarProductoRepositoryService } from '../../infraestructure/repositories/eliminar-producto-repository.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UseCaseEliminarProductoService {

  constructor(private eliminarProductoRepo: EliminarProductoRepositoryService) { }

  eliminarProducto(id: number): Observable<void> {
    return this.eliminarProductoRepo.eliminarProducto(id);
  }
}
