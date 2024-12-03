import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateUserDto, UserDto } from 'dtos/user.dto';

@Injectable()
export class UsersService {
  private users = [
    { id: 1, name: 'John Doe', role: 'admin' },
    { id: 2, name: 'Alex', role: 'user' },
    { id: 3, name: 'Max', role: 'user' },
    { id: 4, name: 'Anna', role: 'user' },
    { id: 5, name: 'John', role: 'user' },
  ];

  getUsers() {
    return this.users;
  }

  findUserById(id: number) {
    const user = this.users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    return user;
  }

  findUserByRole(role?: 'admin' | 'user') {
    if (role) {
      return this.users.filter((user) => user.role === role);
    }
    return this.users;
  }

  create(user: UserDto) {
    const userByHighestId = [...this.users].sort((a, b) => b.id - a.id)[0];
    const newUser = {
      id: userByHighestId.id + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(id: number, user: UpdateUserDto) {
    const userToUpdate = this.findUserById(id);
    const updatedUser = { ...userToUpdate, ...user };
    console.log(updatedUser, 'updated USer');
    this.users = this.users.map((user) =>
      user.id === id ? updatedUser : user,
    );

    console.log(this.users);
    return updatedUser;
  }
  deleteUser(id: number) {
    const deletedUser = this.findUserById(id);
    this.users = this.users.filter((user) => user.id !== id);
    return deletedUser;
  }
}
