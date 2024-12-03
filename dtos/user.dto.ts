import { PartialType } from '@nestjs/mapped-types';
import { IsNumber, IsString } from 'class-validator';

export class User {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  role: 'admin' | 'user';
}

export class UpdateUser extends PartialType(User) {}
