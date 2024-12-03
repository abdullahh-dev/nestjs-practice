import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

/* User DTO */
export class UserDto {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  role: 'admin' | 'user';
}

export class UpdateUserDto extends PartialType(UserDto) {}
