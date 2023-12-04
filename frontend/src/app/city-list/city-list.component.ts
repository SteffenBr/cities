import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { City } from 'src/interfaces/city.interface';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
})
export class CityListComponent implements OnInit {
  cities: City[] = [];

  constructor(private cityService: CityService) {}

  ngOnInit(): void {
    this.cityService.getCities().subscribe((data) => {
      this.cities = data;
    });
  }
}
