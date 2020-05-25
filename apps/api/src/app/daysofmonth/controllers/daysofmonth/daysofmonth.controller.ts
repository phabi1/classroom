import { Body, Controller, Header, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { DaysofmonthService } from '../../services/daysofmonth/daysofmonth.service';

@Controller('daysofmonth')
export class DaysofmonthController {
  constructor(private readonly service: DaysofmonthService) {}

  @Post('generate')
  @Header('Content-type', 'application/pdf')
  generate(@Body() payload: any, @Res() res: Response) {
    this.service.generate(payload, res);
  }
}
