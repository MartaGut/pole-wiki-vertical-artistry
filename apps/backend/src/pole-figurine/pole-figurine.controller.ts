import { Controller, Get } from '@nestjs/common';
import { PoleFigurineService } from './pole-figurine.service';

@Controller('pole-figurine')
export class PoleFigurineController {
  constructor(private readonly poleFigurineService: PoleFigurineService) {}

  @Get()
  async findAll() {
    return this.poleFigurineService.findAll();
  }
}
