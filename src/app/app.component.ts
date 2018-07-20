import { Component, OnInit } from '@angular/core';
import { ExpedientesService } from './expedientes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  expedientes=null;
  
  exp={
    id:null,
    numero:null,
    asunto:null,
    fecha:null
  }

  constructor(private _expService: ExpedientesService) {}

  ngOnInit() {
    this.recuperarTodos();
  }

  recuperarTodos() {
    this._expService.recuperarTodos().subscribe(result => this.expedientes = result);
  }

  alta() {
    this._expService.alta(this.exp).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(id) {
    this._expService.baja(id).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificacion() {
    this._expService.modificacion(this.exp).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });    
  }
  
  seleccionar(id) {
    this._expService.seleccionar(id).subscribe(result => this.exp = result[0]);
  }

  hayRegistros() {
    return true;
  } 

}