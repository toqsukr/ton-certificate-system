import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { OrganizationDTO } from './organization.dto';

@Injectable()
export class OrganizationService {
  constructor(private readonly prisma: PrismaService) {}

  async getOrganizations() {
    return this.prisma.organization.findMany();
  }

  async getOrganizationByCode(code: string) {
    return this.prisma.organization.findUnique({ where: { code } });
  }

  async createOrganization(organization: OrganizationDTO) {
    return this.prisma.organization.create({
      data: {
        ...organization,
        creator: {
          connect: { id: organization.creatorID },
        },
      },
    });
  }

  async updateOrganization(organization: OrganizationDTO) {
    return this.prisma.organization.update({
      where: { code: organization.code },
      data: {
        ...organization,
        creator: {
          connect: { id: organization.creatorID },
        },
      },
    });
  }

  async deleteOrganization(code: string) {
    return this.prisma.organization.delete({ where: { code } });
  }
}
