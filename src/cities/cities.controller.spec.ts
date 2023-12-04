import { Test, TestingModule } from '@nestjs/testing';
import { CitiesController } from './cities.controller';
import { CitiesService } from './cities.service';
import { City } from 'src/interfaces/city.interface';

describe('CitiesController', () => {
  let controller: CitiesController;
  let mockCitiesService: Partial<CitiesService>;
  const mockCities: City[] = [
    {
      name: 'City1',
      name_native: 'City1',
      country: 'Country1',
      continent: 'Continent1',
      latitude: 10.0,
      longitude: 20.0,
      population: 100000,
      founded: 1900,
      landmarks: ['Landmark1', 'Landmark2'],
    },
    {
      name: 'City2',
      name_native: 'City2',
      country: 'Country2',
      continent: 'Continent2',
      latitude: 30.0,
      longitude: 40.0,
      population: 200000,
      founded: 1950,
      landmarks: ['Landmark3'],
    },
  ];

  beforeEach(async () => {
    mockCitiesService = {
      findAll: jest.fn().mockReturnValue(mockCities),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [CitiesController],
      providers: [{ provide: CitiesService, useValue: mockCitiesService }],
    }).compile();

    controller = module.get<CitiesController>(CitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should return an array of cities', async () => {
    expect(controller.getAllCities()).toEqual(mockCities);
  });
});
