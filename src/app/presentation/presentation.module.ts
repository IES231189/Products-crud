import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FormularioProductosComponent } from './feature/Productos/formulario-productos/formulario-productos.component';
import { TableModule } from './shared/Table/table.module';
import { OptenerProductosComponent } from './feature/Productos/Mostrar-productos/optener-productos.component';
import { ButtonComponent } from './shared/button/button.component';



@NgModule({
  declarations: [FormularioProductosComponent , OptenerProductosComponent, ButtonComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    TableModule

  ],
  exports:[
    OptenerProductosComponent,
    ButtonComponent,
    FormularioProductosComponent
  ]
})
export class PresentationModule { }
