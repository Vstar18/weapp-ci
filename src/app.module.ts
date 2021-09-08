
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { PageWrongModule } from './modules/pageWrong/pageWrongController.module';

@Module({
  imports: [
    PageWrongModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
