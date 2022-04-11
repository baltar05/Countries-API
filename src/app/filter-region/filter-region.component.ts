import { Component, OnInit } from '@angular/core';
import {GetCountriesService} from "../get-countries.service";

@Component({
  selector: 'app-filter-region',
  templateUrl: './filter-region.component.html',
  styleUrls: ['./filter-region.component.scss']
})
export class FilterRegionComponent implements OnInit {
  public selected = "";
  constructor(public getCountriesService: GetCountriesService) { }

  ngOnInit(): void {
  }
  public setSelected() {
    this.getCountriesService.region.emit(this.selected);
  }
}
