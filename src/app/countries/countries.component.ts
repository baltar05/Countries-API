import { Component, OnInit } from '@angular/core';
import { GetCountriesService } from '../get-countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})

export class CountriesComponent implements OnInit {
  public countries: any;

  constructor(public countriesService : GetCountriesService) {
    this.countriesService.allCountries().subscribe((data: any) => {
      console.log(data);
      this.countries = data;
      console.log(this.countries);
    })

  }



  ngOnInit(): void {
    this.countriesService.region.subscribe((data) => {
      this.countriesService.getRegion(data).subscribe((itens) => {
        this.countries = itens;
      })
    })

    this.countriesService.country.subscribe((data) => {
      this.countriesService.getCountry(data).subscribe((itens) => {
        this.countries = itens;
      })
    })
  }


}
