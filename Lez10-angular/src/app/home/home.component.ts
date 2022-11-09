import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contatore: number = 0;
  paese: string = 'Italia';


  incrementa(){
    this.contatore += 1;
  }


  constructor() { }

  ngOnInit(): void {
  }

}
