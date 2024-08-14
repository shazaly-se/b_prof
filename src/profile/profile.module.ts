import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Details } from 'src/entities/Details';

@Module({
  imports: [
    TypeOrmModule.forFeature([Details]), // Register the Details entity
  ],
  providers: [ProfileService],
  controllers: [ProfileController]
})
export class ProfileModule {}
