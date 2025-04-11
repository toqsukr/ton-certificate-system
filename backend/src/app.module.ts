import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationModule } from './organization/organization.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, OrganizationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
