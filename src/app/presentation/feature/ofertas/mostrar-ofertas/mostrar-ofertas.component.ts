import { Component } from '@angular/core';
import { OfertasPresentationService } from '../../../ofertas-presentation.service';
import { Ofertas } from '../../../../Domain/entities/Ofertas/Oferta';

@Component({
  selector: 'app-mostrar-ofertas',
  templateUrl: './mostrar-ofertas.component.html',
  styleUrl: './mostrar-ofertas.component.css'
})

export class MostrarOfertasComponent {
  oferta: Ofertas[] = [];

  columns: Array<{ name: string, type: string, action?: string }> = [
    { name: 'Id_oferta', type: 'number' },
    { name: 'Nombre', type: 'text' },
    { name: 'Descripcion', type: 'text' },
    { name: 'Fecha_inicio', type: 'text' },
    { name: 'Fecha_fin', type: 'text' },
    { name: 'editar', type: 'button', action: 'edit' },
    { name: 'eliminar', type: 'button', action: 'delete' }
  ]

  selectedOfert: Ofertas | null = null;

  actionType: 'edit' | 'delete' | null = null;

  constructor(private ofertaService: OfertasPresentationService) { }


  ngOnInit(): void {
    this.ofertaService.mostrarOfertas().subscribe(
      (data) => {
        this.oferta = data.map(oferta => ({
          ...oferta,

        }));
        console.log('Productos con imagen:', this.oferta);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }


  onEdit(oferta: Ofertas) {
    this.selectedOfert = oferta;
    this.actionType = 'edit';
    console.log('Editando oferta', oferta)
  }

  onDelete(oferta: Ofertas) {
    this.selectedOfert = oferta;
    this.actionType = 'delete';
    console.log('Eliminando oferta ', oferta)
  }

  onConfirmDelete() {
    if (this.selectedOfert) {
      console.log('Confirmando eliminar:', this.selectedOfert);
      this.ofertaService.eliminarOferta(this.selectedOfert.Id_oferta).subscribe(
        () => {
          this.oferta = this.oferta.filter(o => o.Id_oferta != this.selectedOfert?.Id_oferta);
          this.selectedOfert = null;
          this.actionType = null;
          console.log('oferta eliminada')
        }, (error) => {
          console.log('Error al eliminar el producto', error)
        }
      )

  }
  }



    onCancelDelete(){
      this.selectedOfert=null;
      this.actionType= null;
    }

    onEditOferta(ofertaEditada : Ofertas){
      console.log('Oferta editado' , ofertaEditada);

      this.ofertaService.actualizarOfertas(ofertaEditada).subscribe(
        ()=>{
          console.log('Oferta actualizado correctamente');
          this.selectedOfert= null;
          this.actionType = null
        },(error)=>{
          console.error('Error al actualizar la oferta' , error)
        }
      )
    }







}
