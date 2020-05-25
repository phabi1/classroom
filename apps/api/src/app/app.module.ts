import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';
import { DaysofmonthModule } from './daysofmonth/daysofmonth.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'classroom'),
      exclude: ['/api*'],
    }),
    DaysofmonthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
