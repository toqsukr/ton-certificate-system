import { Injectable } from '@nestjs/common';
import { UserRole } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async getUsers() {
    return this.prisma.user.findMany();
  }

  async getUserByID(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async createUser(user: CreateUserDTO) {
    return this.prisma.user.create({
      data: { ...user, role: UserRole.common },
    });
  }

  async updateUser(user: UpdateUserDTO) {
    return this.prisma.user.update({ where: { id: user.id }, data: user });
  }

  async deleteUser(id: string) {
    return this.prisma.user.delete({ where: { id } });
  }
}
