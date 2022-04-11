import { Component, OnInit } from '@angular/core';
import {GetCountriesService} from "../get-countries.service";
import {FormControl} from "@angular/forms";
import {Observable, startWith, map} from "rxjs";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  public countries: string[] = [];
  controlPais: FormControl = new FormControl('');
  paisesFiltrados: Observable<string[]> | undefined;


  constructor(public countriesService : GetCountriesService) {
    this.countriesService.allCountries().subscribe((data: any) => {
      data.map((item:any) => {
        this.countries.push(item.name.common);
      })
      console.log(this.countries, "funcionou");

    })
  }

  ngOnInit(): void {
    this.paisesFiltrados = this.controlPais.valueChanges.pipe(startWith(''),
      map(value => this._filter(value)))
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.countries.filter((country: string) => country.toLowerCase().includes(filterValue));
  }
  // função inutilizada usada antes de decidir pelo enter
  // public sendFormControl() {
  // console.log("mandou");
  //   this.countriesService.country.emit(this.controlPais.value);
  //
  // }

  public sendFormControlEnter(event: any){
    if (event.keyCode == 13){
      this.countriesService.country.emit(this.controlPais.value);
    }

  }

}
