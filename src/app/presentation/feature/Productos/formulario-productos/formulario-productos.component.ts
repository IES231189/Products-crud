import { Component } from '@angular/core';
import { Producto } from '../../../../core/entities/Producto/productos';
import { UseCaseCrearProductoService } from '../../../../core/use-cases/Productos/use-case-crear-producto.service';


@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrl: './formulario-productos.component.css'
})
export class FormularioProductosComponent {

  nuevoProducto: Producto = {
    Id_producto: 0,
    Nombre: '',
    Descripcion: '',
    Precio: 0,
    Stock: 0,
    Id_categoria: 0,
    Imagen_url: ''
  };


  constructor(private crearProducto :UseCaseCrearProductoService){

  }

  agregarProducto() {
    this.crearProducto.execute(this.nuevoProducto).subscribe(
      (productoAgregado) => {
        console.log('Producto agregado:', productoAgregado);
        alert('Producto agregado con éxito');
        this.nuevoProducto = {
          Id_producto: 0,
          Nombre: '',
          Descripcion: '',
          Precio: 0,
          Stock: 0,
          Id_categoria: 0,
          Imagen_url: ''
        };
      },
      (error) => {
        console.error('Error al agregar producto:', error);
        alert('Error al agregar el producto');
      }
    );
  }

}
