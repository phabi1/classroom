import { Module } from '@nestjs/common';
import { DaysofmonthController } from './controllers/daysofmonth/daysofmonth.controller';
import { DaysofmonthService } from './services/daysofmonth/daysofmonth.service';

@Module({
  controllers: [DaysofmonthController],
  providers: [DaysofmonthService]
})
export class DaysofmonthModule {}
