import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { MostrarOfertasComponent } from './presentation/feature/ofertas/mostrar-ofertas/mostrar-ofertas.component';
import { OptenerProductosComponent } from './presentation/feature/Productos/Mostrar-productos/optener-productos.component';
import { ObtenerProductosService } from './use-cases/Productos/obtener-productos.service';

const routes: Routes = [
  { path: '', redirectTo: 'producto', pathMatch: 'full' },
  { path: 'producto', component:OptenerProductosComponent },
  { path: 'ofertas', component: MostrarOfertasComponent },
  { path: '**', redirectTo: 'producto' }                  
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
