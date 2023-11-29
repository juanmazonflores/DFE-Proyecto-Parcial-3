
export enum PeliculaEstatus {
  Premire = 'Premire',
  Premium = 'Premium',
}

export interface Pelicula {
  id: number;
  imagen: string;
  nombre: string;
  franquicia: string;
  lugar: String;
  fecha: string;
  descripcion: number;
  precio: string;
  cantidad: string;
  importe: string;
  
}

