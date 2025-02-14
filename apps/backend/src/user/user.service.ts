import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User, Role } from 'src/entities/user.entity';
import * as bcrypt from 'bcrypt';
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly UserRepository: Repository<User>,
  ) {}

  async findByUsername(username: string) {
    return this.UserRepository.findOne({ where: { username } });
  }

  async findAll(): Promise<User[]> {
    return this.UserRepository.find();
  }

  async create(
    name: string,
    lastname: string,
    username: string,
    email: string,
    password_hash: string,
    role: string,
  ): Promise<User> {
    if (!Object.values(Role).includes(role as Role)) {
      throw new Error(`Invalid role: ${role}`);
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password_hash, saltRounds);
    const roleEnum = role as Role;

    const newUser = this.UserRepository.create({
      name,
      lastname,
      username,
      email,
      password_hash: passwordHash,
      role: roleEnum,
    });

    return this.UserRepository.save(newUser);
  }
}
