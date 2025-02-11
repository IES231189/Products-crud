import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Ofertas } from '../../../../Domain/entities/Ofertas/Oferta';
@Component({
  selector: 'app-formulario-ofertas',
  templateUrl: './formulario-ofertas.component.html',
  styleUrls: ['./formulario-ofertas.component.css']
})
export class FormularioOfertasComponent {
  ofertaForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.ofertaForm = this.fb.group({
      Nombre: ['', Validators.required],
      Descripcion: ['', Validators.required],
      Fecha_inicio: ['', Validators.required],
      Fecha_fin: ['', Validators.required] 
    });
  }

  onSubmit() {
    if (this.ofertaForm.valid) {
      const nuevaOferta: Ofertas = {
        Id_oferta: 0, // El ID se generará en el backend
        ...this.ofertaForm.value // Copia los valores del formulario
      };
      console.log('Oferta enviada:', nuevaOferta);
      // Aquí puedes enviar los datos al backend o manejarlos como necesites
    } else {
      console.log('Formulario inválido');
    }
  }
}
