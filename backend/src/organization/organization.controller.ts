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
import { OrganizationDTO } from './organization.dto';
import { OrganizationService } from './organization.service';

@Controller('organization')
@ApiTags('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get organizations' })
  @ApiResponse({ status: 200, description: 'Returns organizations successful' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async getUsers() {
    return await this.organizationService.getOrganizations();
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get organization by code' })
  @ApiResponse({ status: 200, description: 'Returns organization successful' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async getUserByID(@Param('code') code: string) {
    return await this.organizationService.getOrganizationByCode(code);
  }

  @Post()
  @HttpCode(201)
  @ApiBody({ type: OrganizationDTO })
  @ApiOperation({ summary: 'Create organization' })
  @ApiResponse({
    status: 201,
    description: 'Organization was successfully created',
  })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async createOrganization(@Body() orgData: OrganizationDTO) {
    return await this.organizationService.createOrganization(orgData);
  }

  @Post()
  @HttpCode(201)
  @ApiBody({ type: OrganizationDTO })
  @ApiOperation({ summary: 'Update organization' })
  @ApiResponse({
    status: 201,
    description: 'Organization was successfully updated',
  })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async updateUser(@Body() orgData: OrganizationDTO) {
    return await this.organizationService.updateOrganization(orgData);
  }

  @Delete()
  @HttpCode(201)
  @ApiOperation({ summary: 'Delete organization' })
  @ApiResponse({
    status: 201,
    description: 'Organization was successfully deleted',
  })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  @ApiResponse({ status: 500, description: 'Server error' })
  async deleteOrganization(@Param('code') code: string) {
    return await this.organizationService.deleteOrganization(code);
  }
}
