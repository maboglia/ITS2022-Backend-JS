import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ElencoService
 {

  lista: string[] = ['PHP', 'Java', 'Javascript'];

  listaCorsi(){
    return this.lista;
  }

}
