import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  paesi: any;

  constructor(private _http: HttpService) { }

  ngOnInit(): void {
    this._http.getCountries().subscribe(data => {
      this.paesi = data;
      console.log(this.paesi);
      
    });

    
  }

}
