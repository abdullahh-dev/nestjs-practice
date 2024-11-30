import { IsNumber, IsString } from 'class-validator';

export class User {
  @IsNumber()
  id: number;

  @IsString()
  name: string;

  @IsString()
  role: 'admin' | 'user';
}

export class UpdateUserDto {
  @IsString()
  name: string;

  @IsString()
  role: 'admin' | 'user';
}
