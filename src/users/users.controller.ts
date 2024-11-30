import { Controller, Get, Param, Query } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get()
  findUserbyRole(@Query('role') role?: 'admin' | 'user') {
    if (!role) this.userService.getUsers();
    return this.userService.findUserByRole(role);
  }

  @Get(':id')
  findUserById(@Param('id') id: string) {
    return this.userService.findUserById(+id);
  }
}
