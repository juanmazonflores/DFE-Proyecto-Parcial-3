import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasService } from 'src/app/services/peliculas.service';

import { ExploradorComponent } from './explorador/explorador.component';
import { ResumenComponent } from './resumen/resumen.component';
import { TablaComponent } from './tabla/tabla.component';


@NgModule({
  declarations: [
    ExploradorComponent,
    ResumenComponent,
    TablaComponent,

  ],
  imports: [
    CommonModule
  ],
  providers:[
    PeliculasService,
  ],
  exports: [
    ExploradorComponent
  ]
})
export class InventarioModule { }
