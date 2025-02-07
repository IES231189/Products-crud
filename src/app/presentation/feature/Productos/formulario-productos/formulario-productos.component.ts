import { Component } from '@angular/core';
import { Producto } from '../../../../core/entities/Producto/productos';
import { UseCaseCrearProductoService } from '../../../../core/use-cases/Productos/use-case-crear-producto.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formulario-productos',
  templateUrl: './formulario-productos.component.html',
  styleUrls: ['./formulario-productos.component.css']
})
export class FormularioProductosComponent {
  nuevoProducto: Producto = {
    Id_producto: 0,
    Nombre: '',
    Descripcion: '',
    Precio: 0,
    Stock: 0,
    Id_categoria: 0,
    Imagen_url: '',
    Fecha_creacion: ''
  };

  selectedFile: File | null = null;

  constructor(
    private crearProducto: UseCaseCrearProductoService,
    private http: HttpClient
  ) {}

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }

  private getCurrentDateTime(): string {
    const now = new Date();
    return now.toISOString().replace('T', ' ').slice(0, 19);
  }

  agregarProducto() {
    if (!this.selectedFile) {
      alert('Debe seleccionar una imagen.');
      return;
    }

    const formData = new FormData();
    formData.append('imagen', this.selectedFile);

    this.http.post<{ imagen_url: string }>('http://localhost:8080/productos/subir-imagen', formData)
      .subscribe(
        (response) => {
          if (!response.imagen_url) {
            alert('No se pudo obtener la URL de la imagen.');
            return;
          }
          this.nuevoProducto.Imagen_url = response.imagen_url;
          this.nuevoProducto.Fecha_creacion = this.getCurrentDateTime(); 
          this.crearProducto.execute(this.nuevoProducto).subscribe(
            (productoAgregado) => {
              console.log('Producto agregado:', productoAgregado);
              alert('Producto agregado con éxito');
              this.resetForm();
            },
            (error) => {
              console.error('Error al agregar producto:', error);
              alert('Error al agregar el producto');
            }
          );
        },
        (error) => {
          console.error('Error al subir imagen:', error);
          alert('Error al subir la imagen');
        }
      );
  }

  resetForm() {
    this.nuevoProducto = {
      Id_producto: 0,
      Nombre: '',
      Descripcion: '',
      Precio: 0,
      Stock: 0,
      Id_categoria: 0,
      Imagen_url: '',
      Fecha_creacion: ''
    };
    this.selectedFile = null;
  }
}
