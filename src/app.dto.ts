import { IsEmail, IsNotEmpty, IsString } from 'class-validator';


/* DTOs */
export class QueryDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  role: string;
}

