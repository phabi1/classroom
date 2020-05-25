import { Test, TestingModule } from '@nestjs/testing';
import { DaysofmonthController } from './daysofmonth.controller';

describe('Daysofmonth Controller', () => {
  let controller: DaysofmonthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DaysofmonthController],
    }).compile();

    controller = module.get<DaysofmonthController>(DaysofmonthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
