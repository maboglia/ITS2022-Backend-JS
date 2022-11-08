import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corsi',
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.scss']
})
export class CorsiComponent implements OnInit {

  listaCorsi:string[] = ['PHP', 'Java', 'Javascript'];

  constructor() { }

  ngOnInit(): void {
  }

}
