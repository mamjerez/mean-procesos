// Comienza la explicación en el minuto 18:30 del video.

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Proceso } from '../models/proceso';

@Injectable({
  providedIn: 'root'
})
export class ProcesoService {
  selectedProceso: Proceso;
  procesos: Proceso[];
  readonly URL_API = 'http://localhost:3000/api/procesos';

  static getProcesos(): any {
    throw new Error('Método no implementado.');
  }

  constructor(private http: HttpClient) {
    this.selectedProceso = new Proceso();
  }

  postProceso(proceso: Proceso) {
    console.log('postProceso');
    return this.http.post(this.URL_API, proceso);
  }

  getProcesos() {
    return this.http.get(this.URL_API);
  }

  putProceso(proceso: Proceso) {
    return this.http.put(this.URL_API + `/${proceso._id}`, proceso);
  }

  deleteProceso(_id: string) {
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
