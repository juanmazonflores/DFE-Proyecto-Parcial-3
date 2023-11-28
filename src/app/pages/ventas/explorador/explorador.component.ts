import { Component, OnInit } from '@angular/core';

import { Pelicula } from 'src/app/models/casa';

import { PeliculasService } from 'src/app/services/peliculas.service';


@Component({
  selector: 'app-explorador',
  templateUrl: './explorador.component.html',
  styleUrls: ['./explorador.component.scss']
})
export class ExploradorComponent implements OnInit {

  cargandoPeliculas = false;

  listadoPeliculas: Pelicula[] = [];


  constructor(private data: PeliculasService) {

  }


  ngOnInit() {
    this.getPeliculas();
  }


  get mensaje(): string {
    if (this.cargandoPeliculas) {
      return 'Cargando...';
    } else {

      return this.listadoPeliculas.length > 0 ?
        `${this.listadoPeliculas.length} registros encontrados.` :
        'No se han encontrado registros...';

    }

  }

  private getPeliculas() {
    this.cargandoPeliculas = true;

    this.data.getCasasListas()
      .subscribe(x => {
        this.cargandoPeliculas = false;
        this.listadoPeliculas = x;
      });
  }

}
