import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import AppDataSource from './data-source';
import { PoleFigurineModule } from './pole-figurine/pole-figurine.module';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource.options), PoleFigurineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
