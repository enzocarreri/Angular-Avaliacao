import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { PainelComponent } from './painel/painel.component';
import { ProgressoComponent } from './Painel/progresso/progresso.component';
import { TentativasComponent } from './Painel/tentativas/tentativas.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    PainelComponent,
    ProgressoComponent,
    TentativasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
