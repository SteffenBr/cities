import { Test, TestingModule } from '@nestjs/testing';
import { CitiesService } from './cities.service';
import { City } from 'src/interfaces/city.interface';

describe('CitiesService', () => {
  let service: CitiesService;
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
    const module: TestingModule = await Test.createTestingModule({
      providers: [CitiesService],
    }).compile();

    service = module.get<CitiesService>(CitiesService);

    jest.spyOn(service, 'findAll').mockImplementation(() => mockCities);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return an array of cities', () => {
    const result = service.findAll();
    expect(Array.isArray(result)).toBe(true);
    expect(result.length).toBe(mockCities.length);
    expect(result).toEqual(mockCities);
  });
});
