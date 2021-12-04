import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { CrearProductoComponent } from './components/crear-producto/crear-producto.component';
import { PrincipalFaceComponent } from './components/principal-face/principal-face.component';
import { PrincipalPageComponent } from './components/principal-page/principal-page.component';
import { ListarProductosComponent } from './componets/listar-productos/listar-productos.component';

const routes: Routes = [
  { path: '', component: PrincipalFaceComponent },
  { path: 'acerca-de', component: AcercaDeComponent },
  { path: 'principal-page', component: PrincipalPageComponent },
  { path: 'listar-producto', component: ListarProductosComponent },
  { path: 'crear-producto', component: CrearProductoComponent },
  { path: 'editar-producto/:id', component: CrearProductoComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
