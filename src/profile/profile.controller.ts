import { Controller, Get } from '@nestjs/common';
import { ProfileService } from './profile.service';

@Controller('cv')
export class ProfileController {
    constructor(private readonly profileService:ProfileService){}
    @Get()
    async getDetail(){
      const data = await this.profileService.getDetails() 
      return {
        success:true,
        about:data
      }
    }
}
