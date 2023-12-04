import { Injectable } from '@nestjs/common';
import * as cityData from '../../cities.json';
import { City } from 'src/interfaces/city.interface';

@Injectable()
export class CitiesService {
  private cities: City[] = cityData.cities.map((city) => ({
    ...city,
    latitude: parseFloat(city.latitude),
    longitude: parseFloat(city.longitude),
    population: parseInt(city.population, 10),
    founded: parseInt(city.founded, 10),
  }));

  findAll(): City[] {
    return this.cities;
  }
}
