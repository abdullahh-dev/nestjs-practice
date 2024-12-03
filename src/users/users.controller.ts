import {
  Controller,
  Get,
  Param,
  Query,
  ParseIntPipe,
  Delete,
  Patch,
} from '@nestjs/common';
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
  findUserById(
    @Param('id', ParseIntPipe)
    id: number,
  ) {
    return this.userService.findUserById(id);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number) {
    return this.userService.deleteUser(id);
  }
  @Patch(':id')
  updateUser(@Param('id', ParseIntPipe) id: number) {
    // return this.userService.updateUser(id);
  }
}
