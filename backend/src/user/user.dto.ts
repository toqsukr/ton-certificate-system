import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  image: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  organizationID: string;
}

export class UpdateUserDTO extends CreateUserDTO {
  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  id: string;
}
