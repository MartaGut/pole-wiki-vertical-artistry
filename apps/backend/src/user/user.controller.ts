import { Controller, Get, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from 'src/entities/user.entity';
import { CreateUserRequestDto } from './dto/create-user-request.dto';
import { CreateUserResponseDto } from './dto/create-user-response.dto';
@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Post('create')
  async createUser(
    @Body() createUserRequestDto: CreateUserRequestDto,
  ): Promise<CreateUserResponseDto> {
    const user = await this.userService.create(
      createUserRequestDto.name,
      createUserRequestDto.lastname,
      createUserRequestDto.username,
      createUserRequestDto.email,
      createUserRequestDto.password_hash,
      createUserRequestDto.role,
    );

    return {
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      username: user.username,
      email: user.email,
      password_hash: user.password_hash,
      role: user.role,
    };
  }
}
