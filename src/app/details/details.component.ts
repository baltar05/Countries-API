import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GetCountriesService } from '../get-countries.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  public country: string | null = "";
  public currrentCountry: any | undefined;
  public countries: any;

  constructor(private router: Router, private route: ActivatedRoute, public countriesService : GetCountriesService) {
    this.route.paramMap.subscribe((params: ParamMap) =>  {
      this.country = params.get('country');
    });
    if (this.country != null) {
      this.countriesService.getCountry(this.country).subscribe((data: any) => {
        this.currrentCountry = data;
        console.log(this.currrentCountry);
      })
    }
    this.countriesService.allCountries().subscribe((data: any) => {
      this.countries = data;
    })
  }

  ngOnInit(): void {

  }
  // funções para auxiliar o nested ngfor
  customBTrackBy(index: number, item: any): any {
    return index;
  }
  customCTrackBy(index: number, item: any): any {
    return index;
  }

  // função para ser usada no ngFor do currencies e languages
  public extractObject(obj: Object) {
    return Object.values(Object.values(obj));
  }

  // função para habilitar reutilização da rota para o próprio componente
  public reload(url: string) {
    this.router.onSameUrlNavigation = 'reload';
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigateByUrl("/details/" + url);

  }
}
