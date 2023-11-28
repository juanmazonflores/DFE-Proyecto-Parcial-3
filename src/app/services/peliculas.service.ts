import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Pelicula } from '../models/casa';

const API_PATH = 'https://653017326c756603295e3e04.mockapi.io/';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {


  constructor(private http: HttpClient) { }


  getCasasListas(): Observable<Pelicula[]> {
    const path = API_PATH + 'reporte';

    return this.http.get<Pelicula[]>(path);
  }

}
