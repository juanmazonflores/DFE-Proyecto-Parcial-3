import { Component, Input } from '@angular/core';

import { Pelicula } from 'src/app/models/casa';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent {

  @Input() listadoPeliculas: Pelicula[] = [];

  @Input() cargandoPeliculas = false;

  peliculaSeleccionada: Pelicula | null = null;

  rutaImagen = '../../../../assets/img/';

}
