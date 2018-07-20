import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExpedientesService {

  url='http://localhost/tramites/api/'; // disponer url de su servidor que tiene las páginas PHP

  constructor(private _http: HttpClient) { }

  recuperarTodos() {
    return this._http.get(`${this.url}recuperartodos.php`);
  }  

  alta(expediente) {
    return this._http.post(`${this.url}alta.php`, JSON.stringify(expediente));    
  }

  baja(id:number) {
    return this._http.get(`${this.url}baja.php?id=${id}`);
  }
  
  seleccionar(id:number) {
    return this._http.get(`${this.url}seleccionar.php?id=${id}`);
  }

  modificacion(expediente) {
    return this._http.post(`${this.url}modificacion.php`, JSON.stringify(expediente));    
  } 
}
