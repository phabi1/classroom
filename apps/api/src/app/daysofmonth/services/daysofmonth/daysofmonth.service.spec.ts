import { Test, TestingModule } from '@nestjs/testing';
import { DaysofmonthService } from './daysofmonth.service';

describe('DaysofmonthService', () => {
  let service: DaysofmonthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DaysofmonthService],
    }).compile();

    service = module.get<DaysofmonthService>(DaysofmonthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
