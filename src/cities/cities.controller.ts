import { Controller, Get } from '@nestjs/common';
import { CitiesService } from './cities.service';
import { City } from 'src/interfaces/city.interface';

@Controller('cities')
export class CitiesController {
  constructor(private citiesService: CitiesService) {}

  @Get()
  getAllCities(): City[] {
    return this.citiesService.findAll();
  }
}
