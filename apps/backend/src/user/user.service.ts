import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entities/user.entity';
import crypto from 'crypto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  private createSHA256Hash(passwordHash: string): string {
    const hash = crypto.createHash('sha256');
    hash.update(passwordHash);
    return hash.digest('hex');
  }

  async findAll(): Promise<User[]> {
    return this.UserRepository.find();
  }

  create(email: string, password: string): Promise<User> {
    const passwordHash = this.createSHA256Hash(password);
    const newUser = this.UserRepository.create({
      email,
      password_hash: passwordHash,
    });
    return this.UserRepository.save(newUser);
  }
}
