import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponentComponentComponent } from './edit-component-component/edit-component-component.component';
import { DeleteComponentComponent } from './delete-component-component/delete-component-component.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [EditComponentComponentComponent , DeleteComponentComponent , TableComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TableComponent,
    EditComponentComponentComponent,
    DeleteComponentComponent
  ]
})
export class TableModule { }
