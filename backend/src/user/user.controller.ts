import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
} from '@nestjs/common';
import { ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDTO, UpdateUserDTO } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
@ApiTags('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get users' })
  @ApiResponse({ status: 200, description: 'Returns users successful' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async getUsers() {
    return await this.userService.getUsers();
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get user by id' })
  @ApiResponse({ status: 200, description: 'Returns user successful' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async getUserByID(@Param('id') id: string) {
    return await this.userService.getUserByID(id);
  }

  @Post()
  @HttpCode(201)
  @ApiBody({ type: CreateUserDTO })
  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, description: 'User was successfully created' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async createUser(@Body() userData: CreateUserDTO) {
    return await this.userService.createUser(userData);
  }

  @Post()
  @HttpCode(201)
  @ApiBody({ type: UpdateUserDTO })
  @ApiOperation({ summary: 'Update user' })
  @ApiResponse({ status: 201, description: 'User was successfully updated' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async updateUser(@Body() userData: UpdateUserDTO) {
    return await this.userService.updateUser(userData);
  }

  @Delete()
  @HttpCode(201)
  @ApiOperation({ summary: 'Delete user' })
  @ApiResponse({ status: 201, description: 'User was successfully deleted' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async deleteUser(@Param('id') id: string) {
    return await this.userService.deleteUser(id);
  }
}
