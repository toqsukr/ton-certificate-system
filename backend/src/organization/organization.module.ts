import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from './organization.service';

@Module({
  imports: [],
  controllers: [OrganizationController],
  providers: [OrganizationService, PrismaService],
})
export class OrganizationModule {}
