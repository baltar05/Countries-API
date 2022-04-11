import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetCountriesService {
  public url: string = 'https://restcountries.com/v3.1/all'
  public region = new EventEmitter<string>();
  public country = new EventEmitter<string>();

  constructor(public http: HttpClient) { }

  public allCountries(): Observable<object> {
    return this.http.get(this.url) as Observable<object>;
  }
  //tentei usar o guia do angular, mas não entendi como usar o valor recebido de um componente
  // aqui no serviço para então enviar o outro valor desejado para o segundo componente



  public getRegion(region:string): Observable<object> {
    console.log("service workd");
    return this.http.get(`https://restcountries.com/v3.1/region/${region}`);
  }

  public getCountry(country:string): Observable<object> {
    return this.http.get(`https://restcountries.com/v3.1/name/${country}`)
  }

}
