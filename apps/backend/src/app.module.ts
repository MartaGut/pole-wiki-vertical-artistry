import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoleFigurine } from './entities/pole-figurine.entity';
import { PoleFigurineModule } from './pole-figurine/pole-figurine.module';

@Module({
  imports: [
    PoleFigurineModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
