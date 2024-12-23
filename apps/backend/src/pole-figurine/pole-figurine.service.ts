import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PoleFigurine } from '../entities/pole-figurine.entity';

@Injectable()
export class PoleFigurineService {
  constructor(
    @InjectRepository(PoleFigurine)
    private readonly poleFigurineRepository: Repository<PoleFigurine>,
  ) {}

  async findAll(): Promise<PoleFigurine[]> {
    return this.poleFigurineRepository.find();
  }
}
