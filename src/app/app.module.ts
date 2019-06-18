import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NegociosComponent } from './negocios/negocios.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { AboutComponent } from './about/about.component';
import { CuponesComponent } from './cupones/cupones.component';

@NgModule({
  declarations: [
    AppComponent,
    NegociosComponent,
    PedidosComponent,
    AboutComponent,
    CuponesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
