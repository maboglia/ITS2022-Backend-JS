import { Component, OnInit } from '@angular/core';
import { ElencoService } from '../elenco.service';

@Component({
  selector: 'corsi',
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.scss']
})
export class CorsiComponent implements OnInit {

  listaCorsi;
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/2048px-Angular_full_color_logo.svg.png';

  email = "test@me.com";

  isActive = true;

  constructor(service: ElencoService) {
    this.listaCorsi = service.listaCorsi();
   }

   schiaccia($event: MouseEvent){
    let target = $event.target;
    console.log('ho schiacciato il link', target);
    this.isActive = !this.isActive;
   }

   onKeyUp(){
    console.log(this.email);
   }

  ngOnInit(): void {
  }

}
