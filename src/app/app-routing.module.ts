import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NegociosComponent } from './negocios/negocios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { CuponesComponent } from './cupones/cupones.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: 'negocios', component:NegociosComponent},
  {path: 'pedidos', component:PedidosComponent},
  {path: 'cupones', component:CuponesComponent},
  {path: 'about', component:AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
