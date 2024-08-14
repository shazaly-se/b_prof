import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Details } from './entities/Details';
import { Skills } from './entities/Skills';
import { Educations } from './entities/Educations';
import { Experiences } from './entities/Experiences';
import { ProfileModule } from './profile/profile.module';
import { Projects } from './entities/Projects';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'sql12.freesqldatabase.com',
      port: 3306 ,
      username: 'sql12725910',
      password: 'tuV58AdKTu',
      database: 'sql12725910',
      entities: [Details,Skills,Educations,Experiences,Projects], // Add your entities here
      synchronize: false,
    }),
    ProfileModule,
    // TypeOrmModule.forFeature([Details,Skills,Educations,Experiences]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
