import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-page.interface'

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  cargada = false;

  equipo: any[] = [];

  constructor( private http: HttpClient ) {

    this.cargarInfo();
    this.cargarEquipo();
    //console.log('Servicio de infoPagina listo');

   }

   private cargarInfo() {

    // Leer el archivo JSON
    this.http.get('assets/data/data-page.json')
    .subscribe( ( resp: InfoPagina ) => {
      this.cargada = true;
      this.info = resp;
    });
   }

   private cargarEquipo() {

    // Leer el archivo JSON
    this.http.get('https://angular-html-aa801-default-rtdb.firebaseio.com/equipo.json')
        .subscribe( ( resp: any ) => {

          this.equipo = resp;
          console.log(resp);
        });
   }
}
