import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PoleFigurineController } from './pole-figurine.controller';
import { PoleFigurineService } from './pole-figurine.service';
import { PoleFigurine } from '../entities/pole-figurine.entity'; 

@Module({
    imports: [TypeOrmModule.forFeature([PoleFigurine])],
    controllers: [PoleFigurineController],
    providers: [PoleFigurineService],
})
export class PoleFigurineModule {}