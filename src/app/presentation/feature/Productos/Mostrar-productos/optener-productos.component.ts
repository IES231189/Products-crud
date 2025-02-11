import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../../Domain/entities/Producto/productos';
import { ProductoPresentacionService } from '../../../ProductoPresentacion.service';

@Component({
  selector: 'app-optener-productos',
  templateUrl: './optener-productos.component.html',
  styleUrls: ['./optener-productos.component.css']
})
export class OptenerProductosComponent implements OnInit {
  productos: Producto[] = [];
  columns: Array<{ name: string, type: string, action?: string }> = [
    { name: 'Imagen_url', type: 'image' },
    { name: 'Nombre', type: 'text' },
    { name: 'Descripcion', type: 'text' },
    { name: 'Precio', type: 'number' },
    { name: 'Stock', type: 'number' },
    { name: 'editar', type: 'button', action: 'edit' },
    { name: 'eliminar', type: 'button', action: 'delete' }
  ];

  selectedProduct: Producto | null = null;
  actionType: 'edit' | 'delete' | null = null;
  showForm: boolean = false;

  constructor(private productoService: ProductoPresentacionService) {}

  ngOnInit(): void {
    this.productoService.obtenerProductos().subscribe(
      (data) => {
        this.productos = data.map(producto => ({
          ...producto,
          Imagen: producto.Imagen_url ? `http://localhost:4000/${producto.Imagen_url}` : null
        }));
        console.log('Productos con imagen:', this.productos);
      },
      (error) => {
        console.error('Error al obtener productos:', error);
      }
    );
  }

  onEdit(producto: Producto) {
    this.selectedProduct = producto;
    this.actionType = 'edit';
    console.log('Editando producto:', producto);
  }

  onDelete(producto: Producto) {
    this.selectedProduct = producto;
    this.actionType = 'delete';
    console.log('Eliminando producto:', producto);
  }

  onConfirmDelete() {
    if (this.selectedProduct) {
      console.log('Confirmado eliminar:', this.selectedProduct);
      this.productoService.eliminarProducto(this.selectedProduct.Id_producto).subscribe(
        () => {
          // El producto ha sido eliminado con éxito, actualizamos la lista
          this.productos = this.productos.filter(p => p.Id_producto !== this.selectedProduct?.Id_producto);
          this.selectedProduct = null;
          this.actionType = null;
          console.log('Producto eliminado con éxito');
        },
        (error) => {
          console.error('Error al eliminar el producto:', error);
        }
      );
    }
  }

  onCancelDelete() {
    this.selectedProduct = null;
    this.actionType = null;
  }

  onEditProduct(productoEditado: Producto) {
    console.log('Producto editado:', productoEditado);

    this.productoService.actualizarProducto(productoEditado).subscribe(
      () => {
        console.log('Producto actualizado exitosamente');
        this.selectedProduct = null;
        this.actionType = null;
      },
      (error) => {
        console.error('Error al actualizar el producto:', error);
      }
    );
  }


  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
  }



}
